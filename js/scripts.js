// add a new class name to the container

let toggleButton = function (clic) {
    clic.classList.toggle("change");
};
let myToggle = document.getElementsByClassName("toggle-btn")[0];
let navbarLinks = document.getElementsByClassName("navbar_links")[0];

myToggle.addEventListener('click',() => {
    navbarLinks.classList.toggle('active');
});