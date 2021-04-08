gsap.registerPlugin(ScrollTrigger);

const init = () => {
  // Scroll change navbar background
  $(window).scroll(() =>
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 200)
  );

  // Parallax on starting image
  const parallaxTl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".bcg-parallax",
      start: "top bottom",
      scrub: true,
    },
  });
  parallaxTl
    .from(".content-wrapper", { duration: 0.4, autoAlpha: 0 }, 0.4)
    .from(".bcg", { duration: 2, y: "-40%" }, 0);

  // Triggering multiple sections
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      yPercent: 5,
      scrollTrigger: {
        trigger: section,
        start: "top bottom-=200",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });
  });
};

// Animation of initial text
$(() => {
  $(".animate-clip").animatedHeadline({
    animationType: "clip",
  });
});

// Init animations
window.addEventListener("load", () => init());

// Go to Url
const goToPage = (url) => window.open(url, "_blank").focus();

// ScrollToElement
const scrollToElement = (element) => {
  document.getElementById(element).scrollIntoView({ behavior: "smooth" });
};
