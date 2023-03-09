namespace TestNinja.Mocking
{
    public interface IEMailSender
    {
        void EmailFile(string emailAddress, string emailBody, string filename, string subject);
    }
}