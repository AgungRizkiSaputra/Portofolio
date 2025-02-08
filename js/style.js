// ---------------------------------- //
// ------------Navbar js------------- //
// ---------------------------------- //
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const brandText = document.getElementById("brand-text"); // Ambil elemen teks "PORTFOLIO"

  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-md");
    navbar.classList.remove("bg-transparent");

    brandText.classList.add("text-gray-800"); // Ubah warna teks agar terlihat
    brandText.classList.remove("text-white");

    navbar.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.add("text-gray-800");
      link.classList.remove("text-white");
    });
  } else {
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

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("hidden");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah navigasi default

    const targetId = this.getAttribute("href").substring(1); // Ambil ID dari href
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
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

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // Cek jika layar kurang dari 1024px, sembunyikan menu desktop
  if (window.innerWidth < 1024) {
    desktopMenu.classList.add("hidden");
  }
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");

  // Tampilkan kembali menu desktop hanya jika layar lebih dari 1024px
  if (window.innerWidth >= 1024) {
    desktopMenu.classList.remove("hidden");
  }
});

// Pastikan menu desktop muncul kembali saat layar diperbesar ke ukuran desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    desktopMenu.classList.remove("hidden");
    mobileMenu.classList.add("hidden");
  }
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
  scrollTop.addEventListener(
    "click",
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  );
}
