window.addEventListener('DOMContentLoaded', function () {
  // Get video URL from query string
  const params = new URLSearchParams(window.location.search);
const videoBaseURL = "https://valued-decker-459810-u1.web.app/videos/";  
  const video = document.getElementById('fullscreen-video');
  if (videoBaseURL && video) {
    video.src = videoBaseURL;
    video.focus();
    video.addEventListener('ended', () => window.close());
  }
});