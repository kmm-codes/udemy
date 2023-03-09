using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using System.Threading.Tasks;
using static TestNinja.Mocking.HousekeeperService;
using TestNinja.Mocking;
using Castle.Core.Smtp;

namespace NUnitTests.Mocking;
internal class VideoServiceTests
{
    private Video _video;
    private List<Video> _videos;
    private VideoService _videoService;
    private Mock<IVideoFileReader> _videoFileReader;
    [SetUp]
    public void Setup()
    {
        _video = new Video() { Id = 1, IsProcessed = false, Title = "title" };
        _videos = new List<Video>() { _video };
        _videoFileReader = new Mock<IVideoFileReader>();
        _videoFileReader.Setup(vfr => vfr.ReadVideoFromFile()).Returns(() => _video);
        Mock<IVideoRepository> videoRepository = new Mock<IVideoRepository>();
        videoRepository.Setup(vc => vc.GetUnprocessedVideos()).Returns(() => _videos);
        _videoService = new VideoService(_videoFileReader.Object, videoRepository.Object);
    }

    [Test]
    public void ReadVideoTitle_WhenCalled_ReturnVideoTitle()
    {
        var videoTitle = _videoService.ReadVideoTitle();
        Assert.That(videoTitle.Equals(_video.Title));
    }

    [Test]
    public void ReadVideoTitle_VideoIsNull_ReturnErrorString()
    {
        var errorString = "Error parsing the video.";
        _video = null;
        var videoTitle = _videoService.ReadVideoTitle();
        StringAssert.IsMatch(videoTitle, errorString);
    }

    [Test]
    public void GetUnprocessedVideosAsCsv_AllVideosAreProcessed_ReturnEmptyString()
    {
        _videos = new List<Video>();
        var videosCsv = _videoService.GetUnprocessedVideosAsCsv();
        StringAssert.IsMatch(videosCsv, ""); 
    }

    [Test]
    public void GetUnprocessedVideosAsCsv_WhenCalled_ReturnVideoIdsAsCSV()
    {
        var videosCsv = _videoService.GetUnprocessedVideosAsCsv();
        StringAssert.IsMatch(videosCsv, _video.Id.ToString());
    }
    
    [Test]
    public void GetUnprocessedVideosAsCsv_VideosIsNull_ThrowsException()
    {
        _videos = null;
        
        Assert.Throws<NullReferenceException>(()=> _videoService.GetUnprocessedVideosAsCsv());
    }  
    public void GetUnprocessedVideosAsCsv_TwoVideos_ReturnVideoIdsAsCSV()
    {
        _videos = new List<Video>() { _video, _video };
        var videosCsv = _videoService.GetUnprocessedVideosAsCsv();
        var expectedResult = _video.Id + "," + _video.Id;
        StringAssert.IsMatch(videosCsv, expectedResult);
    }
}
