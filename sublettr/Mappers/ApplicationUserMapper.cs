using sublettr.Entities;
using sublettr.Models;

namespace sublettr.Mappers
{
    public class ApplicationUserMapper
    {

        public ApplicationUserDataEntity Map(ApplicationUser model)
        {
            ApplicationUserDataEntity aude = new ApplicationUserDataEntity();
            aude.Email = model.Email;
            aude.Name = model.Name;
            aude.Age = model.Age;
            aude.Sex = model.Sex;
            aude.Major = model.Major;
            aude.Grade = model.Grade;
            aude.IsSeller = model.IsSeller;
            return aude;
        }
    }
}
