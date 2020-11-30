/* ============= Function to toggle navbar ============= */
const toggleNav = () => {
  document.getElementById("nav-items-md").classList.toggle("show-block");
};

const dropdownAdd = () => {
    document.getElementById("dropdown-add").classList.toggle("show-block");
    document.getElementById("overlay-1").classList.toggle("show-block");
};

const dropdownYour = () => {
  document.getElementById("dropdown-your").classList.toggle("show-block");
  document.getElementById("overlay-2").classList.toggle("show-block");
};

/* ============= Function to show dropdown for Type: Lang ============= */
const dropdownType = () => {
    document.getElementById("SelectMenu-1").classList.toggle("show-flex");
    document.getElementById("overlay-3").classList.toggle("show-flex");
};

/* ============= Function to show dropdown for Type: Lang ============= */
const dropdownRepo = () => {
    document.getElementById("SelectMenu-2").classList.toggle("show-flex");
    document.getElementById("overlay-4").classList.toggle("show-flex");
};

/* ============= Function to show dropdown for Type: Lang ============= */
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
}