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

        // GET: api/Message
        [HttpGet("/thread/{threadID}")]
        public IEnumerable<MessageEntity> GetMessagesInThread([FromRoute] int threadID)
        {
            return _context.Messages.Where(m => m.ThreadID == threadID);
        }

        // GET: api/Message/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMessageEntity([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var messageEntity = await _context.Messages.SingleOrDefaultAsync(m => m.ID == id);

            if (messageEntity == null)
            {
                return NotFound();
            }

            return Ok(messageEntity);
        }

        // PUT: api/Message/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMessageEntity([FromRoute] int id, [FromBody] MessageEntity messageEntity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != messageEntity.ID)
            {
                return BadRequest();
            }

            _context.Entry(messageEntity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MessageEntityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Message
        [HttpPost]
        public async Task<IActionResult> PostMessageEntity([FromBody] MessageEntity messageEntity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Messages.Add(messageEntity);
            await _context.SaveChangesAsync();

            ThreadEntity te = _context.Threads.Where(t => t.ID == messageEntity.ThreadID).First();
            te.LastMessageID = messageEntity.ID;
            _context.Update(te);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMessageEntity", new { id = messageEntity.ID }, messageEntity);
        }

        // POST: api/Message/thread
        [HttpPost("/thread")]
        public async Task<IActionResult> PostThreadCreate([FromBody] ThreadEntity te)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ThreadEntity createdTE = _context.Threads.Add(te).Entity;
            await _context.SaveChangesAsync();


            return CreatedAtAction("GetThread", new { id = createdTE.ID }, te);
        }

        [HttpGet("/thread/{threadID}")]
        public async Task<IActionResult> GetThread([FromRoute] int threadId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var te = await _context.Threads.SingleOrDefaultAsync(t => t.ID == threadId);

            if (te == null)
            {
                return NotFound();
            }

            return Ok(te);
        }

        // DELETE: api/Message/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessageEntity([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var messageEntity = await _context.Messages.SingleOrDefaultAsync(m => m.ID == id);
            if (messageEntity == null)
            {
                return NotFound();
            }

            _context.Messages.Remove(messageEntity);
            await _context.SaveChangesAsync();

            return Ok(messageEntity);
        }

        private bool MessageEntityExists(int id)
        {
            return _context.Messages.Any(e => e.ID == id);
        }
    }
}