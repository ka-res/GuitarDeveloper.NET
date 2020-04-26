using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace GuitarDeveloper.NET.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DocumentController : ControllerBase<DocumentController>
    {
        [HttpPost]
        public ActionResult Save(IEnumerable<IFormFile> files, string mode)
        {
            try
            {
                var evaluatedFiles = files.ToList();
                var isSingle = evaluatedFiles.Count() == 1;
                if (!isSingle)
                {
                    return BadRequest();
                }

                var file = evaluatedFiles.Single();
                var fileName = file.FileName;
                var fileContent = file.OpenReadStream();
                var memoryStream = new MemoryStream();
                fileContent.CopyTo(memoryStream);
                // TODO create file in location

                return Ok();
            }
            catch (Exception)
            {
                // TODO fix
                return BadRequest();
            }
        }

        [HttpPost]
        public ActionResult Remove()
        {
            try
            {
                var fileName = Request.Form
                    .Where(x => x.Key == "fileNames")
                    .Select(x => x.Value)
                    .Single();

                // TODO add path
                var fileInfo = new FileInfo("");
                // TODO delete file

                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
