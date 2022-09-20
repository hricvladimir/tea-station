// setup nav
const navBtn = document.getElementById("nav-button");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// back to top button
const backToTop = document.getElementById("back-to-top");

// scroll links
const homeLink = document.getElementById("home-link");
const skillsLink = document.getElementById("skills-link");
const aboutLink = document.getElementById("about-link");
const productsLink = document.getElementById("products-link");
const servicesLink = document.getElementById("services-link");
const contactLink = document.getElementById("contact-link");

// link scroll behaviour
// header
homeLink.addEventListener("click", () => {
  navbar.classList.remove("showNav");
  var element = document.getElementById("header")
  element.scrollIntoView({behavior: "smooth"});
})

// skills
skillsLink.addEventListener("click", () => {
  navbar.classList.remove("showNav"); // hides the navbar
  var element = document.getElementById("skills")
  element.scrollIntoView({behavior: "smooth"});
})

// about 
aboutLink.addEventListener("click", () => {
  navbar.classList.remove("showNav"); // hides the navbar
  var element = document.getElementById("about")
  element.scrollIntoView({behavior: "smooth"});
})

// products 
productsLink.addEventListener("click", () => {
  navbar.classList.remove("showNav"); // hides the navbar
  var element = document.getElementById("products")
  element.scrollIntoView({behavior: "smooth"});
})

// services
servicesLink.addEventListener("click", () => {
  navbar.classList.remove("showNav"); // hides the navbar
  var element = document.getElementById("services")
  element.scrollIntoView({behavior: "smooth"});
})

//contact
contactLink.addEventListener("click", () => {
  navbar.classList.remove("showNav"); // hides the navbar
  var element = document.getElementById("contact")
  element.scrollIntoView({behavior: "smooth"});
})

// show nav
navBtn.addEventListener("click", () => {
  if(navbar.classList.contains("showNav")) 
    navbar.classList.remove("showNav");
  else 
    navbar.classList.add("showNav");
});

// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// back to top
backToTop.addEventListener("click", () => {
  var element = document.getElementById("header");
  element.scrollIntoView({behavior: "smooth"});
})
