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
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly JWTSettings _options;

        public AccountController(AccountRepo ar, 
                                 UserManager<IdentityUser> userManager,
                                 SignInManager<IdentityUser> signInManager,
                                 IOptions<JWTSettings> optionsAccessor)
		{
            _accountRepo = ar;
            _userManager = userManager;
            _signInManager = signInManager;
            _options = optionsAccessor.Value;
		}

        // GET: api/account
        [HttpGet]
        public IEnumerable<AccountModel> Get()
        {
            return _accountRepo.GetAccounts();
        }

        // GET api/account/5
        [HttpGet("{id}")]
        public AccountModel Get(int id)
        {
            return _accountRepo.GetAccount(id);
        }

        // POST api/account
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] AccountModel value)
        {
            if (ModelState.IsValid)
            {
                var user = new IdentityUser
                {
                    UserName = value.Username,
                    Email = value.Username
                };
                Console.WriteLine(value.ToString());
                var result = await _userManager.CreateAsync(user, 
                                                            value.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    return new JsonResult(new Dictionary<string, object>
                    {
                        { "access_token", GetAccessToken(value.Username) },
                        { "id_token", GetIdToken(user) }
                    });
                }
                return Errors(result);
            }
            return Error("Unexpected error");
        }

        // PUT api/account/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]AccountModel value)
        {
            if (!ModelState.IsValid)
            {
                Console.WriteLine("Model state is invalid");
            }
            else
            {
                _accountRepo.Update(id, value);
            }

        }

        // DELETE api/account/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            AccountModel am = Get(id);
            if (am != null)
            {
                _accountRepo.RemoveAccount(am);
            }
        }

        private string GetIdToken(IdentityUser user)
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
    }
}
