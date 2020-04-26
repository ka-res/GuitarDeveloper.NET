using GuitarDeveloper.NET.Models.Parameters.Invitation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace GuitarDeveloper.NET.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class InvitationController : ControllerBase<InvitationController>
    {
        //private readonly IInvitationService _invitationService;

        public InvitationController()
        {
            // TODO init
        }

        [HttpPost]
        public ActionResult SendInvitation(dynamic parameters)
        {
            try
            {
                var data = parameters.data;
                var typedParams = new InvitationParamModel(data);
                // TODO send mail

                return Ok();
            }
            catch (Exception)
            {
                // TODO logger
                return BadRequest();
            }
        }
    }
}
