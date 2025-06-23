using SimpleToDo.Server.Models;

namespace SimpleToDo.Server.Data
{
    public class MyDataContext
    {
        public List<PostModel> Posts { get; set; }
        public MyDataContext()
        {
            Posts = new List<PostModel>();
        }
    }
}
