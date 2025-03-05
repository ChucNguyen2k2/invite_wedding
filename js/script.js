// Điều khiển âm thanh
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const toggleButton = document.getElementById('music-toggle');
    audio.volume = 0.5; // Âm lượng mặc định 50%

    // Phát nhạc ngay khi tải trang nếu không bị chặn
    audio.play().then(function() {
        toggleButton.textContent = "Tắt Nhạc";
    }).catch(function(error) {
        console.log("Autoplay bị chặn bởi trình duyệt: ", error);
        toggleButton.textContent = "Bật Nhạc"; // Nếu bị chặn, hiển thị "Bật Nhạc"
    });

    // Xử lý nút bật/tắt
    toggleButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            toggleButton.textContent = "Tắt Nhạc";
        } else {
            audio.pause();
            toggleButton.textContent = "Bật Nhạc";
        }
    });

    // Thêm sự kiện tương tác của người dùng để phát nhạc nếu bị chặn
    document.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            toggleButton.textContent = "Tắt Nhạc";
        }
    }, { once: true });
});

// Hiệu ứng Particles.js
particlesJS('hero', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: 'bottom', random: true }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' } }
    }
});