using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GuitarDeveloper.NET.Server.Controllers
{
    public abstract class ControllerBase<T> : ControllerBase 
        where T : ControllerBase<T>
    {
        protected ILogger<T> _loggingService;
        // TODO fix
        //protected ILogger<T> Logger => _loggingService ?? (_loggingService = HttpContext.RequestServices.GetService<ILogger<T>>());
    }
}
