document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  window.lenis = lenis;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -72, duration: 1.2 });

        // Close mobile menu if open
        const overlay = document.querySelector(".nav-mobile-overlay");
        if (overlay && overlay.classList.contains("open")) {
          overlay.classList.remove("open");
          document.body.style.overflow = "";
        }
      }
    });
  });

  const navbar = document.getElementById("navbar");

  lenis.on("scroll", (e) => {
    if (e.animatedScroll > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const toggleBtn = document.querySelector(".nav-mobile-toggle");
  const overlay = document.querySelector(".nav-mobile-overlay");
  const closeBtn = document.querySelector(".nav-mobile-close");

  function openMobileMenu() {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    // Update icon
    toggleBtn.querySelector("i").setAttribute("data-lucide", "x");
    lucide.createIcons();
  }

  function closeMobileMenu() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    toggleBtn.querySelector("i").setAttribute("data-lucide", "menu");
    lucide.createIcons();
  }

  toggleBtn.addEventListener("click", () => {
    if (overlay.classList.contains("open")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  closeBtn.addEventListener("click", closeMobileMenu);
});
