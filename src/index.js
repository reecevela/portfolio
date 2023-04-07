import './styles.css'

document.addEventListener("DOMContentLoaded", () => {

  // navbar & hamburger section
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute("href"));
  
      if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }
  
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  
  
  // About section intersection observer & functionality
  const aboutSection = document.querySelector("#about");
  const options = {
    root: null,
    rootMargin: "-30% 0px 0px 0px",
    threshold: 0.1, // Adjust this value to control when the animation starts (0 to 1)
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (aboutSection) {
    observer.observe(aboutSection);
  }

  // back to top button functionality
  const backToTop = document.getElementById("back-to-top");
  const navBar = document.querySelector("nav");

  // button appears when nav bar is not in the viee
  window.addEventListener("scroll", () => {
    const navBottomPosition = navBar.getBoundingClientRect().bottom;
    if (navBottomPosition < 0) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });


});
