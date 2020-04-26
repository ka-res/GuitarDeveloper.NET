using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace GuitarDeveloper.NET.Server.Middleware
{
    public class OptionsMiddleware
    {
        private readonly RequestDelegate _next;

        public OptionsMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        private static async void BeginInvoke(HttpContext context)
        {
            if (context.Request.Method != "OPTIONS")
            {
                return;
            }

            context.Response.Headers.Add("Access-Control-Allow-Origin", new[]
            {
                (string)context.Request.Headers["Origin"]
            });
            
            context.Response.Headers.Add("Access-Control-Allow-Headers", new[]
            {
                "Origin, X-Requested-With, Content-Type, Accept"
            });

            context.Response.Headers.Add("Access-Control-Allow-Methods", new[]
            {
                "GET, POST, PUT, DELETE, OPTIONS"
            });

            context.Response.Headers.Add("Access-Control-Allow-Credentials", new[]
            {
                "true"
            });

            context.Response.StatusCode = 200;

            await context.Response.WriteAsync("OK");
        }

        public async Task Invoke(HttpContext context)
        {
            BeginInvoke(context);

            if (!context.Response.HasStarted)
            {
                await _next.Invoke(context);
            }
        }
    }

    public static class OptionsMiddlewareExtensions
    {
        public static IApplicationBuilder UseOptions(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<OptionsMiddleware>();
        }
    }
}
