function openVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'flex';

    const heroAudio = document.getElementById('hero-music');
    if (heroAudio && !heroAudio.paused) {
        toggleMute();
    }

    const video = modal.querySelector('video');
    if (video) {
        video.play().catch(error => console.log("Video play failed:", error));
    }
}

function openInfoModal() {
    document.getElementById('infoModal').style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    const video = modal.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0; 
    }
}

window.onclick = function (event) {
    const videoModal = document.getElementById('videoModal');
    const infoModal = document.getElementById('infoModal');
    if (event.target == videoModal) {
        closeModal('videoModal');
    }
    if (event.target == infoModal) {
        closeModal('infoModal');
    }
}

function toggleMute() {
    const audio = document.getElementById('hero-music');
    const btnHtml = document.querySelector('.mute-btn');

    if (audio.paused) {
        audio.play().then(() => {
            btnHtml.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.07 4.93C20.9447 6.80527 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.46C16.4774 9.39763 17.0039 10.6692 17.0039 12C17.0039 13.3308 16.4774 14.6024 15.54 15.54" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
        }).catch(err => {
            console.error("Audio play failed (user interaction needed):", err);
        });
    } else {
        audio.pause();
        btnHtml.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="23" y1="9" x2="17" y2="15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="17" y1="9" x2="23" y2="15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
}