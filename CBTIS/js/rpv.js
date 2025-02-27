const videoPlayer = document.getElementById('video-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const volumeBtn = document.getElementById('volume-btn');
const volumeSlider = document.getElementById('volume-slider');
const progressBar = document.querySelector('.progress');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// Volume control
volumeBtn.addEventListener('click', () => {
  if (videoPlayer.volume > 0) {
    videoPlayer.volume = 0;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    videoPlayer.volume = 1;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});

volumeSlider.addEventListener('input', () => {
  videoPlayer.volume = volumeSlider.value;
  if (videoPlayer.volume === 0) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});

// Progress bar
videoPlayer.addEventListener('timeupdate', () => {
  const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
});