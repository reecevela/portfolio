import './styles.css';
import Selfie from './images/selfie-pic-paint.webp';
import HeroBkg from './images/hero-bkg.webp';
import SkillsBkg from './images/skills-bkg.webp';
import AIITSnip from './images/aiitsupport-snip.webp';
import Weather from './images/repos/weather.webp';
import shipping from './images/repos/shipping.webp';
import SocialMedia from './images/repos/social-media-dashboard.webp';
import BST from './images/repos/binary-search-tree.webp';

document.addEventListener("DOMContentLoaded", () => {

  // navbar & hamburger section
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu li a");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(event.currentTarget.getAttribute("href"));
      if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // background image because webpack can be difficult to fight with at times
  function setBackgroundImage(queryElement, image) {
    const element = document.querySelector(queryElement);
    element.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${image})`;
  }
  
  setBackgroundImage('.hero', HeroBkg);
  
  // Intersection observer & functionality
  const aboutSection = document.querySelector("#about");
  const skills = document.querySelector("#skills-container");
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

  if (skills) {
    observer.observe(skills);
  }

  // projects section
  const techTagContainer = document.querySelector('.tech-used');
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
    "OpenAI"
  ]

  for (const tag of techTags) {
    const div = document.createElement('div');
    div.classList = 'tech';
    div.textContent = tag;
    techTagContainer.appendChild(div);
  }

  // additional projects
  const projectContainer = document.querySelector('.other-projects');

  function createProjectCard(repo, title, url = null) {
    const div = document.createElement('div');
    div.classList.add('project-card');
  
    const heading = document.createElement('h4');
    heading.textContent = title;
    div.appendChild(heading);
  
    const img = document.createElement('img');
    img.src = `./images/${repo}.webp`;
    img.alt = `${title} image`;
    img.loading = 'lazy';
    div.appendChild(img);
  
    const links = document.createElement('div');
    links.classList.add('links');
  
    const githubLink = document.createElement('a');
    githubLink.href = `https://github.com/reecevela/${repo}`;
    githubLink.target = '_blank';
    githubLink.textContent = 'GitHub';
    links.appendChild(githubLink);
  
    const demoLink = document.createElement('a');
    if (!url) {
      url = `https://reecevela.github.io/${repo}`;
    }
    demoLink.href = url;
    demoLink.target = '_blank';
    demoLink.textContent = 'Live Demo';
    links.appendChild(demoLink);
  
    div.appendChild(links);
  
    return div;
  }

  const projects = [
    {
      repo: 'weather',
      title: 'Weather App'
    },
    {
      repo: 'shipping',
      title: 'Shipping Label Generator'
    },
    {
      repo: 'binary-search-tree',
      title: 'Binary Search Tree'
    },
    {
      repo: 'social-media-dashboard',
      title: 'Social Media Dashboard'
    },
  ];

  for (const project of projects) {
    projectContainer.appendChild(
      createProjectCard(project.repo, project.title, project?.url)
    );
  }

  // Skills background image
  setBackgroundImage('.skills-parallax', SkillsBkg);

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

  document.getElementById("current-year").textContent = new Date().getFullYear();

});
