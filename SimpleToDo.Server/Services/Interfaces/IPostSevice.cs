using Microsoft.AspNetCore.Mvc;
using SimpleToDo.Server.Models;

namespace SimpleToDo.Server.Services.Interfaces
{
    public interface IPostSevice
    {
        PostModel Create(PostModel model);
        PostModel Update(PostModel model);
        PostModel Get(int id);
        List<PostModel> Get();
        void Delete(int id);
    }
}
