gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Loading Screen Animation
  const loadingScreen = document.getElementById("loading-screen");
  const wordmark = document.querySelector(".loading-wordmark");
  const loadingBar = document.querySelector(".loading-bar");

  if (loadingScreen) {
    const tl = gsap.timeline({
      onComplete: () => {
        loadingScreen.remove();
      },
    });

    tl.fromTo(
      wordmark,
      {
        opacity: 0,
        scale: 0.9,
        y: 20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
    )
      .fromTo(
        loadingBar,
        {
          scaleX: 0,
          transformOrigin: "center",
        },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "-=0.2",
      )
      .to(wordmark, {
        opacity: 0,
        y: -20,
        duration: 0.4,
      })
      .to(
        loadingScreen,
        {
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut",
        },
        "-=0.2",
      )
      .fromTo(
        ".hero-bg",
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 2,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .fromTo(
        ".hero-content",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=1.6",
      );
  }

  // -----------------------------------------------
  // 2. Parallax Section — ScrollTrigger
  // -----------------------------------------------
  const parallaxBg = document.getElementById("parallax-bg");

  if (parallaxBg) {
    gsap.to(parallaxBg, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }

  // Parallax content fade-in
  gsap.fromTo(
    ".parallax-content",
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#parallax-section",
        start: "top 75%",
        end: "top 40%",
        scrub: 1,
      },
    },
  );

  // attraction cards fade-in with stagger
  const revealElements = document.querySelectorAll("[data-reveal]");

  revealElements.forEach((el, i) => {
    // Add a small stagger delay for attraction cards within the grid
    const isAttractionCard = el.classList.contains("attraction-card");
    const delay = isAttractionCard ? i * 0.1 : 0;

    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      delay: delay,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Hero background parallax effect
  const heroBg = document.querySelector(".hero-bg");

  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 8,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }

  //Section headers reveal
  const sectionHeaders = document.querySelectorAll(".section-header");

  sectionHeaders.forEach((header) => {
    gsap.from(header, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
});
