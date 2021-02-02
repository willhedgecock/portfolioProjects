let toggleButton = document.getElementsByClassName('toggle-button')[0];
let navLinks = document.getElementsByClassName('navbar-links')[0];
let navbar = document.querySelector('.navbar');
let sticky = navbar.offsetTop;

//RESPONSIVE MENU
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

let listNodes = document.getElementsByClassName('nav-item'); //GRAB EACH NAV LIST ITEM

//LOOP THROUGH THE NAV LIST ITEM ARRAY AND ASSIGN AN ONCLICK FUNCTION THAT CLOSES THE MOBILE MENU
for (let x = 0; x < listNodes.length; x++) {
    listNodes[x].addEventListener('click', function() {
        navLinks.classList.toggle('active');
    })
}


//STICKY NAVBAR
window.onscroll = () => {stickyNav()};

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}