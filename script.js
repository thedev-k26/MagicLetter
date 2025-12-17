document.addEventListener("DOMContentLoaded", () => {
  // 1. Cấu hình hiệu ứng tuyết rơi (Particles.js)
  particlesJS("snow-effect", {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
        },
        onclick: {
          enable: false,
        },
        resize: true,
      },
    },
    retina_detect: true,
  });

  // 2. Xử lý logic mở thiệp
  const cardFront = document.getElementById("card-front");
  const cardInner = document.getElementById("card-inner");
  const cardSurprise = document.getElementById("card-surprise");
  const openCardButton = document.getElementById("open-card-button");
  const revealSurpriseButton = document.getElementById(
    "reveal-surprise-button"
  );
  // Thêm biến audio vào đầu file script.js
  const bgMusic = document.getElementById("christmas-music");

  openCardButton.addEventListener("click", () => {
    // Kích hoạt nhạc khi người dùng tương tác
    bgMusic.play().catch((error) => {
      console.log("Trình duyệt chặn tự động phát nhạc, cần tương tác thêm.");
    });
    bgMusic.volume = 0.7; // Điều chỉnh âm lượng nhạc nền

    cardFront.classList.remove("active");
    cardFront.classList.add("hidden");

    setTimeout(() => {
      cardInner.classList.remove("hidden");
      cardInner.classList.add("active");
    }, 800);
  });

  revealSurpriseButton.addEventListener("click", () => {
    cardInner.classList.remove("active");
    cardInner.classList.add("hidden");

    setTimeout(() => {
      cardSurprise.classList.remove("hidden");
      cardSurprise.classList.add("active");
    }, 800);
  });
});
