'use strict';

const elementToggleFunc = elem => elem.classList.toggle("active");

// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn) sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
if (form) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      formBtn.disabled = !form.checkValidity();
    });
  });
}

// Mark active nav link by matching current page URL
const navLinks = document.querySelectorAll("[data-nav-link]");
navLinks.forEach(link => {
  const href = link.getAttribute("href");
  if (!href) return;
  const page = href.replace(/^\.\//, '').replace(/^\//, '');
  const current = location.pathname.replace(/^\//, '') || 'index.html';
  if (current === page || (page === 'index.html' && current === '')) {
    link.classList.add("active");
  }
});