using System;
using System.Collections.Generic;
using System.Data.Entity;
using VSTDA.Api.Models;
using System.Linq;
using System.Web;

namespace VSTDA.Api.Infrastructure
{
    public class TodoDataContext :DbContext
    {
        public TodoDataContext() :base ("Todos")
        {

        }
        //public IDbSet<Todo> Todos { get; set; }  WHYYY OH WHYYYYYYYY

        public System.Data.Entity.DbSet<VSTDA.Api.Models.Todo> Todoes { get; set; }
    }
}