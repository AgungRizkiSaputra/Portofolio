// ---------------------------------- //
// ------------Navbar js------------- //
// ---------------------------------- //
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const brandText = document.getElementById("brand-text");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.add("bg-white", "shadow-md");
    navbar.classList.remove("bg-transparent");

    brandText.classList.add("text-gray-800");
    brandText.classList.remove("text-white");

    navbar.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.add("text-gray-800");
      link.classList.remove("text-white");
    });
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white", "shadow-md");

    brandText.classList.add("text-white");
    brandText.classList.remove("text-gray-800");

    navbar.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.add("text-white");
      link.classList.remove("text-gray-800");
    });
  }
});

window.dispatchEvent(new Event("scroll"));

const navigationLinks = document.querySelectorAll("#menu a, #mobile-menu a");
const setActiveNav = (targetId) => {
  navigationLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${targetId}`);
  });
};

setActiveNav("home");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      setActiveNav(targetId);
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===================Saat Mode Berganti M/D=====================

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const desktopMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

const setMobileMenu = (isOpen) => {
  mobileMenu.classList.toggle("hidden", !isOpen);
  mobileMenu.classList.toggle("mobile-menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};

menuToggle.addEventListener("click", () => {
  setMobileMenu(!mobileMenu.classList.contains("mobile-menu-open"));
});

closeMenu.addEventListener("click", () => {
  setMobileMenu(false);

  if (window.innerWidth >= 1024) {
    desktopMenu.classList.remove("hidden");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    desktopMenu.classList.remove("hidden");
    setMobileMenu(false);
  } else {
    desktopMenu.classList.add("hidden");
  }
});

window.dispatchEvent(new Event("resize"));

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setMobileMenu(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMobileMenu(false);
});

// ---------------------------------- //
// ------------Ganti2 js------------- //
// ---------------------------------- //
const roles = ["Web Developer", "Mobile Developer", "UI/UX Desain"];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");

function changeText() {
  dynamicText.textContent = roles[index];
  index = (index + 1) % roles.length;
}
setInterval(changeText, 2000);
changeText();

// ---------------------------------- //
// ------------Project js------------- //
// ---------------------------------- //
const eyeIcons = document.querySelectorAll(".eye-icon");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

eyeIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    const title = icon.getAttribute("data-title");
    const description = icon.getAttribute("data-description");
    const image = icon.getAttribute("data-image");

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = image;

    modal.classList.remove("hidden");
  });
});

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}

// ---------------------------------- //
// ------------Scroll Top js------------- //
// ---------------------------------- //
const scrollTop = document.querySelector(".scroll-top");
if (scrollTop) {
  const togglescrollTop = function () {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  };
  window.addEventListener("load", togglescrollTop);
  document.addEventListener("scroll", togglescrollTop);
  scrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

(() => {
  const sections = document.querySelectorAll("#about, #education, #experience, #project, #contact");
  sections.forEach((section) => {
    section.classList.add("reveal-on-scroll");
    const groups = section.querySelectorAll(".grid, .flex.flex-wrap, .max-w-7xl, .max-w-6xl");
    groups.forEach((group) => group.classList.add("reveal-stagger"));
  });
  let previousScrollY = window.scrollY;
  let scrollDirection = "down";

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - previousScrollY) > 2) {
      scrollDirection = currentScrollY < previousScrollY ? "up" : "down";
      previousScrollY = currentScrollY;
    }
    if (currentScrollY < 100) setActiveNav("home");
  }, { passive: true });

  const replayAnimation = (element) => {
    element.classList.remove("scroll-reveal-up", "scroll-reveal-down");
    void element.offsetWidth;
    element.classList.add(`scroll-reveal-${scrollDirection}`);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        replayAnimation(entry.target);
        if (entry.target.id) setActiveNav(entry.target.id);
      }
    });
  }, { threshold: 0.14, rootMargin: "-8% 0px -8% 0px" });
  document.querySelectorAll(".reveal-on-scroll, .reveal-stagger").forEach((element) => observer.observe(element));
})();

// ---------------------------------- //
// ------ Particle Canvas JS -------- //
// ---------------------------------- //
const particleCanvas = document.getElementById('particleCanvas');

if (particleCanvas) {
  const ctx = particleCanvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * particleCanvas.width;
      this.y = Math.random() * particleCanvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.color = Math.random() > 0.5 ? '#22d3ee' : '#a855f7';
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > particleCanvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > particleCanvas.height) this.vy *= -1;

      if (mouse.x && mouse.y) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 2;
          this.y -= (dy / distance) * force * 2;
        }
      }
    }
  }

  function initParticles() {
    particles = [];
    const particleCount = Math.floor((particleCanvas.width * particleCanvas.height) / 12000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();
}

// ---------------------------------- //
// -------- Tech Toggle Inline JS --- //
// ---------------------------------- //
document.addEventListener("DOMContentLoaded", function () {
  const toggleTechBtn = document.getElementById("toggleTechBtn");
  const extraTech = document.getElementById("extraTech");
  const techIcon = document.getElementById("techIcon");

  if (toggleTechBtn && extraTech) {
    toggleTechBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const isHidden = extraTech.classList.contains("hidden");

      if (isHidden) {
        extraTech.classList.remove("hidden");
        extraTech.classList.add("flex");
        if (techIcon) {
          techIcon.classList.remove("fa-ellipsis");
          techIcon.classList.add("fa-chevron-left");
        }
      } else {
        extraTech.classList.add("hidden");
        extraTech.classList.remove("flex");
        if (techIcon) {
          techIcon.classList.remove("fa-chevron-left");
          techIcon.classList.add("fa-ellipsis");
        }
      }
    });
  }
});

// ---------------------------------- //
// ----- Copy To Clipboard JS ------- //
// ---------------------------------- //
function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = btnElement.innerHTML;
    btnElement.innerHTML = `<i class="fas fa-check text-emerald-600"></i><span class="text-emerald-600">Copied!</span>`;
    btnElement.classList.add("border-emerald-300", "bg-emerald-50");
    
    setTimeout(() => {
      btnElement.innerHTML = originalHTML;
      btnElement.classList.remove("border-emerald-300", "bg-emerald-50");
    }, 2000);
  }).catch((err) => {
    console.error("Gagal menyalin teks: ", err);
  });
}

// ---------------------------------- //
// ----- Copy To Clipboard JS ------- //
// ---------------------------------- //
function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = btnElement.innerHTML;
    btnElement.innerHTML = `<i class="fas fa-check text-emerald-600"></i><span class="text-emerald-600">Copied!</span>`;
    btnElement.classList.add("border-emerald-300", "bg-emerald-50");
    
    setTimeout(() => {
      btnElement.innerHTML = originalHTML;
      btnElement.classList.remove("border-emerald-300", "bg-emerald-50");
    }, 2000);
  }).catch((err) => {
    console.error("Gagal menyalin teks: ", err);
  });
}