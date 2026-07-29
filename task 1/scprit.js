// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = "Thanks! Your message has been sent.";
  formMsg.style.color = "green";
  contactForm.reset();
  setTimeout(() => formMsg.textContent = "", 3000);
});

// CTA button
document.getElementById('ctaBtn').addEventListener('click', () => {
  alert("Let's work together!");
});