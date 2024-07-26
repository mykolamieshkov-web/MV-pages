// js script code here!!
document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.play();

        // Safari requires play to be called directly
        video.addEventListener('canplay', () => {
            if (!video.paused) {
                video.play();
            }
        });
    });
});