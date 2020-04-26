using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;

namespace GuitarDeveloper.NET.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DataImportController : ControllerBase<DataImportController>
    {
        public ActionResult ImportData(dynamic parameters)
        {
            FileInfo fileInfo;
            var fileName = parameters.fileName.ToString();
            try
            {
                // TODO path
                fileInfo = new FileInfo("");
                // TODO process document

                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
