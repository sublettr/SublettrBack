using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWT;
using JWT.Algorithms;
using JWT.Serializers;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using sublettr.Models;
using sublettr.Repos;

namespace sublettr.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly AccountRepo _accountRepo;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly JWTSettings _options;
        private SubletRepo _subletRepo;

        public AccountController(AccountRepo ar, 
                                 UserManager<ApplicationUser> userManager,
                                 SignInManager<ApplicationUser> signInManager,
                                 IOptions<JWTSettings> optionsAccessor,
                                 SubletRepo sr)
		{
            _accountRepo = ar;
            _userManager = userManager;
            _signInManager = signInManager;
            _options = optionsAccessor.Value;
            _subletRepo = sr;
		}

        // GET: api/account
        [HttpGet]
        public IEnumerable<ApplicationUser> Get()
        {
            return _accountRepo.GetAccounts();
        }

        // GET api/account/jnewlin@purdue.edu
        [HttpGet("{email}")]
        public ApplicationUser Get(string email)
        {
            return _accountRepo.GetAccount(email);
        }

        // POST api/account
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Credentials Credentials)
        {
            var errors = ModelState.SelectMany(x => x.Value.Errors.Select(z => z.ErrorMessage));
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser
                {
                    UserName = Credentials.Email,
                    Email = Credentials.Email
                };
                var result = await _userManager.CreateAsync(user, 
                                                            Credentials.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    return new JsonResult(new Dictionary<string, object>
                    {
                        { "access_token", GetAccessToken(Credentials.Email) },
                        { "id_token", GetIdToken(user) }
                    });
                }
                return Errors(result);
            }
            var errorList = new List<IdentityError>();
            if (errors.Any())
            {
                foreach (var description in errors)
                {
                    errorList.Add(new IdentityError { Code = "400", Description = description });
                }
            }
            return Errors(IdentityResult.Failed(errorList.ToArray()));
        }

        [HttpPost("sign-in")]
        public async Task<IActionResult> SignIn([FromBody] Credentials Credentials)
        {
            var errors = ModelState.SelectMany(x => x.Value.Errors.Select(z => z.ErrorMessage));
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(Credentials.Email);
                if (user == null)
                {
                    return new JsonResult("No user found for email") { StatusCode = 401 };
                }
                var passwordCheck = await _signInManager.UserManager.CheckPasswordAsync(user, Credentials.Password);
                if (!passwordCheck)
                {
                    return new JsonResult("Password is incorrect") { StatusCode = 401 };
                }
                var result = await _signInManager.PasswordSignInAsync(Credentials.Email, Credentials.Password, false, false);
                if (result.Succeeded)
                {
                    return new JsonResult(new Dictionary<string, object>
                    {
                        { "access_token", GetAccessToken(Credentials.Email) },
                        { "id_token", GetIdToken(user) }
                    });
                }
                return new JsonResult("Unable to sign in") { StatusCode = 401 };
            }
            var errorList = new List<IdentityError>();
            if (errors.Any())
            {
                foreach (var description in errors)
                {
                    errorList.Add(new IdentityError { Code = "400", Description = description });
                }
            }
            return Errors(IdentityResult.Failed(errorList.ToArray()));
        }

        // PUT api/account/jnewlin
        [HttpPut("{email}")]
        public IActionResult Put(string email, [FromBody]ApplicationUser value)
        {
            if (ModelState.IsValid)
            {
                if (_accountRepo.Update(email, value) == 0)
                {
                    return Error("Account does not exist.");
                }

                return new JsonResult(new Dictionary<string, string>
                {
                    { "Success", "True" }
                });

            }
            else
            {
                return Error("Model is not valid.");
            }

        }

        // DELETE api/account/jnewlin
        [HttpDelete("{email}")]
        public IActionResult Delete(string email)
        {
            ApplicationUser am = Get(email);
            if (am != null)
            {
                _accountRepo.RemoveAccount(am);
                return new JsonResult(new Dictionary<string, string>
                    {
                        { "username", email },
                        {  "description", "Deleted sucessfully" }
                    });
            }
            return Error("User does not exist");
        }

        private string GetIdToken(ApplicationUser user)
        {
            var payload = new Dictionary<string, object>
            {
                { "id", user.Id },
                { "sub", user.UserName },
                { "email", user.UserName },
                //{ "emailConfirmed", user.usernameConfirmed }
            };
            return GetToken(payload);
        }

        private string GetAccessToken(string Email)
        {
            var payload = new Dictionary<string, object>
            {
                { "sub", Email },
                { "email", Email }
            };
            return GetToken(payload);
        }

        private string GetToken(Dictionary<string, object> payload)
        {
            var secret = _options.SecretKey;

            payload.Add("iss", _options.Issuer);
            payload.Add("aud", _options.Audience);
            // not before
            payload.Add("nbf", ConvertToUnixTimestamp(DateTime.Now));
            // issued at
            payload.Add("iat", ConvertToUnixTimestamp(DateTime.Now));
            // expiration
            payload.Add("exp", ConvertToUnixTimestamp(DateTime.Now.AddDays(7)));
            IJwtAlgorithm algorithm = new HMACSHA256Algorithm();
            IJsonSerializer serializer = new JsonNetSerializer();
            IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
            IJwtEncoder encoder = new JwtEncoder(algorithm, serializer,
                                                 urlEncoder);

            return encoder.Encode(payload, secret);
        }

        // Return an array of errors
        private JsonResult Errors(IdentityResult result)
        {
            var items = result.Errors
                              .Select(x => x.Description)
                              .ToArray();
            return new JsonResult(items) { StatusCode = 400 };
        }

        // return a single error
        private JsonResult Error(string message)
        {
            return new JsonResult(message) { StatusCode = 400 };
        }

        private static double ConvertToUnixTimestamp(DateTime date)
        {
            DateTime origin = new DateTime(1970, 1, 1, 0, 0, 0, 0,
                                           DateTimeKind.Utc);
            TimeSpan diff = date.ToUniversalTime() - origin;
            return Math.Floor(diff.TotalSeconds);
        }

        [HttpGet("saved/{email}")]
        public SubletModel[] GetSavedSublets(string email)
        {
            return _subletRepo.GetSaved(email);
        }

        [HttpGet("posted/{email}")]
        public SubletModel[] GetPostedSublets(string email)
        {
            return _subletRepo.GetPosted(email);
        }

    }
}
