using sublettr.Entities;
using sublettr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Mappers
{
    public class AccountMapper
    {

        public FullAccountModel Map(UserModel model, UserDataEntity entity)
        {
            FullAccountModel fam = new FullAccountModel(model.ID)
            {
                Username = model.Username,
                Age = entity.Age,
                IsSeller = entity.Seller,
                Major = entity.Major,
                Sex = entity.Sex,
                Year = entity.Year
            };

            return fam;
        }
    }
}
