using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(context.Posts.Count() == 0)
            {
                List<Post> seedPosts = new List<Post>
                 {
                    new Post() {Title = "First Post", Body="This is the body of my First post.  It will be used if there are no posts in the database."},
                    new Post() {Title = "Second Post", Body="This is the body of my Second post.  It will be used if there are no posts in the database."},
                    new Post() {Title = "Third Post", Body="This is the body of my Third post.  It will be used if there are no posts in the database."}                    
                 };
                 context.Posts.AddRange(seedPosts);
                 context.SaveChanges();
            }
        }
    }
}