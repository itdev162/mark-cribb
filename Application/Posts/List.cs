using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Posts
{
    public class List
    {

        public class Query : IRequest<List<Post>> { }

        public class Handler : IRequestHandler<Query, List<Post>>
        {
            private readonly DataContext context;

            public Handler(DataContext context) => this.context = context;

            public Task<List<Post>> Handle(Query request, CancellationToken cancellationToken)
            {
                return this.context.Posts.ToListAsync();
            }
        }

    }
}