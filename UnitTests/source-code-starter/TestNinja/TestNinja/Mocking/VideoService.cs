using System;
using System.Collections.Generic;
using System.Linq;

namespace TestNinja.Mocking
{
    public class VideoService
    {
        private IVideoFileReader _videoFileReader;
        private IVideoRepository _videoRepository;
        public VideoService(IVideoFileReader videoFileReader, IVideoRepository videoRepository)
        {
            _videoFileReader = videoFileReader;            
            _videoRepository = videoRepository;
        }

        public string ReadVideoTitle()
        {
            Video video = _videoFileReader.ReadVideoFromFile();
            if (video == null)
                return "Error parsing the video.";
            return video.Title;
        }

        public string GetUnprocessedVideosAsCsv()
        {
            IEnumerable<Video> videos = _videoRepository.GetUnprocessedVideos();
            var videoIds = new List<int>();

            foreach (var v in videos)
                videoIds.Add(v.Id);

            return String.Join(",", videoIds);

        }
    }
}