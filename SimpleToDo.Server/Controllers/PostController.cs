using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SimpleToDo.Server.Models;
using SimpleToDo.Server.Services.Interfaces;

namespace SimpleToDo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private IPostSevice _postsService;
        public PostController(IPostSevice postSevice)
        {
            _postsService = postSevice;
        }
        [HttpPost]
        public PostModel Create(PostModel model)
        {
            return _postsService.Create(model);
        }
        [HttpPatch]
        public PostModel Update(PostModel model)
        {
            return _postsService.Update(model);
        }
        [HttpGet]
        public IEnumerable<PostModel> GetAll()
        {
            return _postsService.Get();
        }
        [HttpGet("{id}")]
        public PostModel Get(int id)
        {
            return _postsService.Get(id);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postsService.Delete(id);
            return Ok();
        }
    }
}
