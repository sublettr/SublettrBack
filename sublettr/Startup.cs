﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Swagger;
using sublettr.DataAccess;
using Microsoft.EntityFrameworkCore;
using sublettr.Repos;
using sublettr.Mappers;

namespace sublettr
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1", new Info
                {
                    Title = "Sublettr API",
                    Version = "v1",
                    Description = "An ASP.NET Core Web API for Sublettr",
                    TermsOfService = "None",
                    Contact = new Contact { Name = "Joel Van Auken", Email = "jvanauke@purdue.edu", Url = "" }
                });
            });

            services.AddDbContext<RDSContext>(options =>
            options.UseMySql(Helpers.GetRDSConnectionString()));

            services.AddScoped<SubletRepo>();
            services.AddScoped<AccountRepo>();
            services.AddSingleton<SubletMapper>();
            services.AddSingleton<AccountMapper>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseStaticFiles();

            app.UseSwagger();
            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Sublettr API V1");
            });

            app.UseMvc();
        }
    }
}
