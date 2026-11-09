// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  menuBtn.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
});

// Close Menu After Clicking a Link

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

// Dynamic Copyright Year

document.getElementById("year").textContent = new Date().getFullYear();

// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
  ".section-heading, .about-card, .detail-box, .skill-card, .project-card, .contact-content",
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});

// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value;

  const email = contactForm.querySelector('input[type="email"]').value;

  const message = contactForm.querySelector("textarea").value;

  const recipient = "your-email@gmail.com";

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  );

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
