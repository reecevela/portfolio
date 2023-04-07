import './styles.css';
import Selfie from './images/selfie-pic-paint.jpg';
import HeroBkg from './images/hero-bkg.jpg';
import AIITSnip from './images/aiitsupport-snip.png';

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

  // background image because webpack can be difficult to fight with at times
  function setBackgroundImage() {
    const heroElement = document.querySelector('.hero');
    heroElement.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${HeroBkg})`;
  }
  
  setBackgroundImage();
  
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

  // projects section
  const techTagWrapper = document.querySelector('.tech-used');
  const techTags = [
    "Django",
    "GPT API",
    "Python",
    "Postgres",
    "Cloud Deployment",
    "Databases",
    "Linux",
    "Git",
    "JS",
    "HTML",
    "CSS",
    "Nginx",
    "Gunicorn",
  ]

  for (const tag of techTags) {
    const div = document.createElement('div');
    div.classList = 'tech';
    div.textContent = tag;
    techTagWrapper.appendChild(div);
  }

  // back to top button functionality
  const backToTop = document.getElementById("back-to-top");
  const navBar = document.querySelector("nav");

  // button appears when nav bar is not in the view
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
