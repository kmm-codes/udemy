using System.IO;
using Newtonsoft.Json;

namespace TestNinja.Mocking
{
    public class VideoFileReader : IVideoFileReader
    {
        public Video ReadVideoFromFile()
        {
            var str = File.ReadAllText("video.txt");
            var video = JsonConvert.DeserializeObject<Video>(str);
            return video;
        }
    }
}