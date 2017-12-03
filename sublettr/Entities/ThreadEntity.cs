using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class ThreadEntity
    {
        public int ID { get; set; }
        [ForeignKey("Messages")]
        public int? LastMessageID { get; set; }
        public string Name { get; set; }
        public string AvatarSrc { get; set; }
        [ForeignKey("AspNetUsers")]
        public string UserAID { get; set; }
        [ForeignKey("AspNetUsers")]
        public string UserBID { get; set; }

        public ThreadEntity(int iD, int lastMessageID, string name, string avatarSrc)
        {
            ID = iD;
            LastMessageID = lastMessageID;
            Name = name;
            AvatarSrc = avatarSrc;
        }

        public ThreadEntity()
        {
        }
    }
}
