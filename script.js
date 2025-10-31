// === Mobile Menu Toggle ===
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.querySelector("ul").classList.toggle("active");
  });
}

// === Theme Toggle ===
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

if (themeToggle) {
  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
}

// ===== SCROLL REVEAL EFFECT =====
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 120;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", revealElements);
revealElements(); // Trigger on load

// ===== CONTACT FORM WITH EMAILJS =====
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("q6CN0nQQEr8BLsLdd"); // 🔹 Replace with your EmailJS Public Key

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      emailjs
        .sendForm("service_8jclfvg", "template_x1bsvci", this)
        .then(
          () => {
            alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);
            form.reset();
          },
          (error) => {
            alert(" Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
          }
        );
    });
  }
});

