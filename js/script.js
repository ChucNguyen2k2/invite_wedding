// Điều khiển âm thanh
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const toggleButton = document.getElementById('music-toggle');
    audio.volume = 0.5;

    audio.play().then(() => {
        toggleButton.textContent = 'Tắt Nhạc';
    }).catch(() => {
        toggleButton.textContent = 'Bật Nhạc';
    });

    toggleButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            toggleButton.textContent = 'Tắt Nhạc';
        } else {
            audio.pause();
            toggleButton.textContent = 'Bật Nhạc';
        }
    });

    // Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#f8c6d2' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: 'bottom', random: true }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' } }
        }
    });

    // Xử lý form lưu niệm (hiện chỉ console.log)
    const form = document.getElementById('guestbook-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        console.log(`Tên: ${name}, Lời nhắn: ${message}`);
        form.reset();
        alert('Cảm ơn bạn đã gửi lời chúc!');
    });
});