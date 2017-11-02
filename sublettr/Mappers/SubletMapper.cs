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

        public FullSubletModel Map(SubletModel model, SubletDataEntity entity, string[] tags)
        {
            FullSubletModel fsm = new FullSubletModel(model.ID, model.UserID, model.Address);
            fsm.Description = entity.Description;
            fsm.IsFurnished = entity.isFurnished;
            fsm.Roommates = entity.Roommates;
            fsm.OpenHouse = entity.OpenHouse;
            fsm.Tags = tags;

            return fsm;
        }

        public SubletDataEntity ExtractDataEntity(FullSubletModel model)
        {
            SubletDataEntity sde = new SubletDataEntity();
            sde.Description = model.Description;
            sde.isFurnished = model.IsFurnished;
            sde.Roommates = model.Roommates;
            sde.UserID = model.UserId;
            sde.OpenHouse = model.OpenHouse;
            return sde;
        }
    }
}
