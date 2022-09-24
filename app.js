// setup nav
const navBtn = document.getElementById("nav-button");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// buttons
const backToTop = document.getElementById("back-to-top");
const contactUsButton = document.getElementById("contact-us-button");

// scroll links
const homeLink = document.getElementById("home-link");
const skillsLink = document.getElementById("skills-link");
const aboutLink = document.getElementById("about-link");
const productsLink = document.getElementById("products-link");
const servicesLink = document.getElementById("services-link");
const contactLink = document.getElementById("contact-link");
const exploreLink = document.getElementById("explore-link");

// explore button behaviour
exploreLink.addEventListener("click", () => {
  var element = document.getElementById("skills");
  element.scrollIntoView({behavior: "smooth"});
})

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

function fetchSubmissionData() {
  return {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      message:document.getElementById("message").value
    })
  }
}

function handleFormSubmission() {
  let fetchedData = fetchSubmissionData();
  fetch("http://127.0.0.1:8080/api/emails", fetchedData).then((response) => response.json())
  .then((data) => console.log(data));
}

contactUsButton.addEventListener("click", () => {
  handleFormSubmission();
  window.location.pathname = "/projects/tea-station/response.html";
});