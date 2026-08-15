// ==========================================================================
// NAVBAR: scrolled state + mobile hamburger menu
// ==========================================================================
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu when a link is tapped
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// ==========================================================================
// ACTIVE SECTION HIGHLIGHT ON SCROLL
// ==========================================================================
const sections = document.querySelectorAll("section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinkEls.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    });
  },
  {
    // Trigger when a section occupies the middle band of the viewport
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

// ==========================================================================
// SCROLL REVEAL ANIMATIONS
// ==========================================================================
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px",
  }
);

revealEls.forEach((el) => revealObserver.observe(el));

// ==========================================================================
// CONTACT FORM (no backend — front-end only confirmation)
// ==========================================================================
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // No backend is connected — this only confirms the form was filled
  // out correctly and resets it. Wire this up to a real email service
  // (e.g. Formspree, EmailJS, or your own API) to actually send messages.
  formSuccess.classList.add("visible");
  contactForm.reset();

  window.clearTimeout(contactForm._successTimeout);
  contactForm._successTimeout = window.setTimeout(() => {
    formSuccess.classList.remove("visible");
  }, 4000);
});

// ==========================================================================
// FOOTER YEAR
// ==========================================================================
document.getElementById("year").textContent = new Date().getFullYear();
