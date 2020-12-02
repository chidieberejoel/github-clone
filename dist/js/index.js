/* ============= Function to display 
mini navbar ============= */
const toggleNav = () => {
  document.getElementById("nav-items-md").classList.toggle("show-block");
};

/* ============= Function to display 
"New" dropdown ============= */
const dropdownAdd = () => {
  document.getElementById("dropdown-add").classList.toggle("show-block");
  document.getElementById("overlay-1").classList.toggle("show-block");
};
/* ============= Function to display 
"User" dropdown ============= */
const dropdownYour = () => {
  document.getElementById("dropdown-your").classList.toggle("show-block");
  document.getElementById("overlay-2").classList.toggle("show-block");
};

/* ============= Function to display 
"Type: All" dropdown ============= */
const dropdownType = () => {
  document.getElementById("SelectMenu-1").classList.toggle("show-flex");
  document.getElementById("overlay-3").classList.toggle("show-flex");
};

/* ============= Function to display 
"Language: All" dropdown ============= */
const dropdownRepo = () => {
  document.getElementById("SelectMenu-2").classList.toggle("show-flex");
  document.getElementById("overlay-4").classList.toggle("show-flex");
};

/* ============= Function to display 
"Set Status" ============= */
const dropdownStatus = () => {
  document.getElementById("details-dial").classList.toggle("show-flex");
  document.getElementById("overlay-5").classList.toggle("show-block");
};

/* =============== Sticky navbar on scroll =============== */
window.onscroll = () => {
  myFunction();
};

const myFunction = () => {
  const navbar = document.getElementById("undelined-section");
  const sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

/* =============== Sticky Username tag on scroll =============== */

const myScrollFunc = () => {
  const sticky = document.getElementById("user-profile-sticky-bar");
  const y = window.scrollY;
  if (y >= 325) {
    sticky.style.opacity = 1;
  } else {
    sticky.style.opacity = 0;
  }
};

window.addEventListener("scroll", myScrollFunc);
