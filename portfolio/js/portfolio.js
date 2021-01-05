let toggleButton = document.getElementsByClassName('toggle-button')[0];
let navLinks = document.getElementsByClassName('navbar-links')[0];
let navbar = document.querySelector('.navbar');
let sticky = navbar.offsetTop;

//RESPONSIVE MENU
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

//STICKY NAVBAR
window.onscroll = () => {stickyNav()};

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}