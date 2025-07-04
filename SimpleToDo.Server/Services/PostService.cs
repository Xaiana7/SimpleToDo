﻿using SimpleToDo.Server.Data;
using SimpleToDo.Server.Models;
using SimpleToDo.Server.Services.Interfaces;
using System.Reflection;

namespace SimpleToDo.Server.Services
{
    public class PostService : IPostSevice
    {
        private MyDataContext _dataContext;
        public PostService(MyDataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public PostModel Create(PostModel model)
        {
            var lastPost = _dataContext.Posts.LastOrDefault();
            int newId = lastPost is null ? 1 : lastPost.Id + 1;

            model.Id = newId;
            _dataContext.Posts.Add(model);

            return model;
        }

        public void Delete(int id)
        {
            var modelToDelete = _dataContext.Posts.FirstOrDefault(x => x.Id == id);
            _dataContext.Posts.Remove(modelToDelete);
        }


        public PostModel Update(PostModel model)
        {
            var modelToUpdate = _dataContext.Posts.FirstOrDefault(x => x.Id == model.Id);
            modelToUpdate.Text = model.Text;
            modelToUpdate.Header = model.Header;
            return modelToUpdate;
        }
        public PostModel Get(int id)
        {
            return _dataContext.Posts.FirstOrDefault(x => x.Id == id);
        }

        List<PostModel> IPostSevice.Get()
        {
            return _dataContext.Posts;
        }
    }
}
