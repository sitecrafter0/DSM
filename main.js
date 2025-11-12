// ===== Highlight Current Page Automatically =====
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".main-nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ===== Mobile Nav Toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// ===== Highlight Current Page Automatically =====
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".main-nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ===== Mobile Nav Toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
