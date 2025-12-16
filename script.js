function openVideoModal() {
    document.getElementById('videoModal').style.display = 'flex';
}

function openInfoModal() {
    document.getElementById('infoModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const videoModal = document.getElementById('videoModal');
    const infoModal = document.getElementById('infoModal');
    if (event.target == videoModal) {
        closeModal('videoModal');
    }
    if (event.target == infoModal) {
        closeModal('infoModal');
    }
}