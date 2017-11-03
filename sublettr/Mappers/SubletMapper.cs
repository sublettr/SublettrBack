using sublettr.Entities;
using sublettr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Mappers
{
    public class SubletMapper
    {

        public FullSubletModel Map(SubletModel model, SubletDataEntity entity, string[] tags, string[] imageUrls, RoommateEntity[] roommates)
        {
            FullSubletModel fsm = new FullSubletModel(model.ID, model.Email, model.Address)
            {
                Description = entity.Description,
                IsFurnished = entity.IsFurnished,
                Roommates = roommates,
                OpenHouse = entity.OpenHouse,
                Tags = tags,
                ImageUrls = imageUrls
            };

            return fsm;
        }

        public SubletDataEntity ExtractDataEntity(FullSubletModel model)
        {
            SubletDataEntity sde = new SubletDataEntity
            {
                Description = model.Description,
                IsFurnished = model.IsFurnished,
                Email = model.Email,
                OpenHouse = model.OpenHouse
            };
            return sde;
        }
    }
}
