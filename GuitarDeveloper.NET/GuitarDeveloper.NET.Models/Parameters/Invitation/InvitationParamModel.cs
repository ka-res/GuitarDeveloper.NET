namespace GuitarDeveloper.NET.Models.Parameters.Invitation
{
    public class InvitationParamModel
    {
        public string Email { get; set; }

        // TODO add language dictionary model
        public string Language { get; set; }

        public InvitationParamModel(dynamic data)
        {
            if (data == null)
            {
                return;
            }

            Email = data.email.Value;

            //var isLanguageEmpty = ((JsonObject)data).IsNullOrEmpty(nameof(Language)).ToNaiveCamelCase());
            //if (!isLanguageEmpty)
            //{
            //    // TODO change with asset model
            //    Language = ((JsonObject)data.language).ToObject<string>();
            //}
        }
    }
}
