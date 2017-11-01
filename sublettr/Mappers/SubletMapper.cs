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

        public FullSubletModel Map(SubletModel model, SubletDataEntity entity)
        {
            FullSubletModel fsm = new FullSubletModel(model.ID, model.UserID, model.Address);
            fsm.Description = entity.Description;
            fsm.IsFurnished = entity.isFurnished;
            fsm.Roommates = entity.Roommates;
            fsm.OpenHouse = entity.OpenHouse;
            fsm.ImageUrls = entity.ImageUrls;
            return fsm;
        }

        public SubletDataEntity Map(FullSubletModel model)
        {
            SubletDataEntity sde = new SubletDataEntity();
            sde.Description = model.Description;
            sde.isFurnished = model.IsFurnished;
            sde.Roommates = model.Roommates;
            sde.UserID = model.UserId;
            sde.OpenHouse = model.OpenHouse;
            sde.ImageUrls = model.ImageUrls;
            return sde;
        }
    }
}
