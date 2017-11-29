using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sublettr.DataAccess;
using sublettr.Entities;

namespace sublettr.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class MessageController : Controller
    {
        private readonly RDSContext _context;

        public MessageController(RDSContext context)
        {
            _context = context;
        }

        // GET: api/Message/messages/thread/5
        [HttpGet("messages/thread/{threadID:int}")]
        public IEnumerable<MessageEntity> GetMessagesInThread([FromRoute] int threadID)
        {
            return _context.Messages.Where(m => m.ThreadID == threadID);
        }

        // GET: api/Message/5
        [HttpGet("{id:int}")]
        public MessageEntity GetMessageEntity([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return null;
            }

            var messageEntity = _context.Messages.SingleOrDefault(m => m.ID == id);

            if (messageEntity == null)
            {
                return null;
            }

            return messageEntity;
        }

        // POST: api/Message/5
        [HttpPost("{threadID:int}")]
        public int PostMessageEntity([FromRoute] int threadID, [FromBody] MessageEntity messageEntity)
        {
            if (!ModelState.IsValid)
            {
                return -1;
            }

            ThreadEntity te = _context.Threads.Where(t => t.ID == messageEntity.ThreadID).First();

            MessageEntity me =_context.Messages.Add(messageEntity).Entity;
            _context.SaveChanges();
            messageEntity.ID = me.ID;

            te.LastMessageID = messageEntity.ID;
            _context.Update(te);
            _context.SaveChanges();

            return messageEntity.ID;
        }

        // POST: api/Message/thread/create
        [HttpPost("thread/create")]
        public int PostThreadCreate([FromBody] ThreadEntity te)
        {
            if (!ModelState.IsValid)
            {
                return -1;
            }
            te.LastMessageID = null;
            ThreadEntity createdTE = _context.Threads.Add(te).Entity;
            _context.SaveChanges();


            return createdTE.ID;
        }

        // GET: api/Message/thread/5
        [HttpGet("thread/{threadID:int}")]
        public ThreadEntity GetThread([FromRoute] int threadId)
        {
            if (!ModelState.IsValid)
            {
                return null;
            }

            var te = _context.Threads.SingleOrDefault(t => t.ID == threadId);

            if (te == null)
            {
                return null;
            }

            return te;
        }

        private bool MessageEntityExists(int id)
        {
            return _context.Messages.Any(e => e.ID == id);
        }
    }
}