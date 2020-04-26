using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Diagnostics;
using System.Reflection;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace GuitarDeveloper.NET.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CommonController : ControllerBase<CommonController>
    {
        //private readonly CommonService _commonService;

        public CommonController()
        {
            // TODO inject
        }

        [HttpGet]
        public ActionResult GetVersion()
        {
            try
            {
                var assembly = Assembly.GetExecutingAssembly();
                var fileVersionInfo = FileVersionInfo.GetVersionInfo(assembly.Location);
                var version = fileVersionInfo.FileVersion;

                return new JsonResult(version);
            }
            catch (Exception)
            {
                //_loggingService.LogException(e);
                return BadRequest();
            }
        }

        [HttpGet]
        public ActionResult GetUserName()
        {
            try
            {
                //var userName = _commonService.GetLogedUserName();

                // TODO correct
                return new JsonResult(string.Empty);
            }
            catch (Exception)
            {
                //_loggingService.LogException(e);
                return BadRequest();
            }
        }
    }
}
