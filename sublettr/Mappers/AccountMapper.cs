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
            FullAccountModel fam = new FullAccountModel(model.ID);
            fam.Username = model.Username;
            fam.Age = entity.Age;
            fam.IsSeller = entity.Seller;
            fam.Major = entity.Major;
            fam.Sex = entity.Sex;
            fam.Year = entity.Year;

            return fam;
        }
    }
}
