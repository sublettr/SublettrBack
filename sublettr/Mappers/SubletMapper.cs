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
            FullSubletModel fsm = new FullSubletModel(model.UserID, model.ID, model.Address);
            fsm.Description = entity.Description;
            fsm.IsFurnished = entity.Furnished;
            fsm.Roommates = entity.Roommates;

            return fsm;
        }
    }
}
