using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class MessageEntity
    {
        public int ID { get; set; }
        public DateTime SentAt { get; set; }
        public bool IsRead { get; set; }
        [ForeignKey("AspNetUsers")]
        public string AuthorID { get; set; }
        public string Text { get; set; }
        [ForeignKey("Threads")]
        public int ThreadID { get; set; }

        public MessageEntity(int iD, DateTime sentAt, bool isRead, string authorID, string text, int threadID)
        {
            ID = iD;
            SentAt = sentAt;
            IsRead = isRead;
            AuthorID = authorID;
            Text = text;
            ThreadID = threadID;
        }

        public MessageEntity()
        {
        }
    }
}
