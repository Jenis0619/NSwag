﻿using System;
using System.Linq;
using System.Collections.Generic;
using System.Reflection;
using System.Runtime.Serialization;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using NSwag.Demo.OwinCoreWeb.Controllers;

namespace NSwag.Demo.OwinCoreWeb
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseMvc();
            app.UseSwaggerUi(typeof(Startup).GetTypeInfo().Assembly, new SwaggerUiOwinSettings
            {
                Title = "Foo bar",
                Version = "1.1.0"
            });

            //var postMethod = typeof(PersonController).GetTypeInfo().GetMethod("Post");
            //var xml = postMethod.GetXmlDocumentation();

            //var u = DynamicApis.SupportsFileApis;

        }
    }
}
