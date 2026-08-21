// ---------------------------------- //
// ------------Navbar js------------- //
// ---------------------------------- //
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const brandText = document.getElementById("brand-text"); // Ambil elemen teks "PORTFOLIO"

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.add("bg-white", "shadow-md");
    navbar.classList.remove("bg-transparent");

    brandText.classList.add("text-gray-800"); // Ubah warna teks agar terlihat
    brandText.classList.remove("text-white");

    navbar.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.add("text-gray-800");
      link.classList.remove("text-white");
    });
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white", "shadow-md");

    brandText.classList.add("text-white"); // Kembalikan ke warna putih
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
        block: "start", // Sesuaikan posisi saat scroll berhenti
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

  // Tampilkan kembali menu desktop hanya jika layar lebih dari 1024px
  if (window.innerWidth >= 1024) {
    desktopMenu.classList.remove("hidden");
  }
});

// Pastikan menu desktop muncul kembali saat layar diperbesar ke ukuran desktop
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
// Ambil semua tombol "eye"
const eyeIcons = document.querySelectorAll(".eye-icon");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

// Event listener untuk setiap ikon eye
eyeIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah reload halaman
    const title = icon.getAttribute("data-title");
    const description = icon.getAttribute("data-description");
    const image = icon.getAttribute("data-image");

    // Set konten modal
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = image;

    // Tampilkan modal
    modal.classList.remove("hidden");
  });
});

// Tutup modal ketika tombol close diklik
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Tutup modal jika klik di luar area modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

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
