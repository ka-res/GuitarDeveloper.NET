using GuitarDeveloper.NET.Server.Middleware;
using GuitarDeveloper.NET.Server.Registration;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using System.Linq;

namespace GuitarDeveloper.NET.Server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            var serverUrlAliases = new List<string>();
            var clientUrlAliases = new List<string>();

#if DEBUG 
            var serverUrlDebug = Configuration["ServerUrlDebug"];
            if (!string.IsNullOrEmpty(serverUrlDebug))
            {
                serverUrlAliases.Add(serverUrlDebug);
            }

            var clientUrlDebug = Configuration["ClientUrlDebug"];
            if (!string.IsNullOrEmpty(clientUrlDebug))
            {
                clientUrlAliases.Add(clientUrlDebug);
            }
#endif
            var mergedOrigins = serverUrlAliases
                .Concat(clientUrlAliases)
                .ToArray();

            services.AddCors(options => options.AddPolicy("AllowAll",
                policy => policy
                .WithOrigins(mergedOrigins)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials())
            );

            string role;
#if DEBUG
            role = Configuration["GroupAllDebug"];
#endif

            services.AddAuthorization(options => options.AddPolicy("AllUsers",
                policy => policy.RequireRole(role)));

            services.AddMvc(config =>
            {
                var policy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .Build();

                config.Filters.Add(new AuthorizeFilter(policy));
            });

            // TODO register contxt
            RegistrationModule.RegisterRepositories(services);
            RegistrationModule.RegisterServices(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("AllowAll");
            app.UseOptions();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication();
            //app.UseMvc();

            // TODO verify this default code
            //if (env.IsDevelopment())
            //{
            //    app.UseDeveloperExceptionPage();
            //}

            //app.UseHttpsRedirection();

            //app.UseRouting();

            //app.UseAuthorization();

            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapControllers();
            //});
        }
    }
}
