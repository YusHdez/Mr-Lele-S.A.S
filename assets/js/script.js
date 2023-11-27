 const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const header = document.getElementById('header')
const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const navMenu = document.getElementById('nav-menu')
 
//Cambio de container - Sign In/Sign Up
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



//Menu reponsive
if (menuOpen) {
    menuOpen.addEventListener('click', () => {
        navMenu.classList.add('header__nav--visible')
    })
} 

if (menuClose) {
    menuClose.addEventListener('click', () => {
        navMenu.classList.remove('header__nav--visible')
    })
} 

// Scroll in menu
addEventListener('scroll', () => { 

    if(this.scrollY > 150) {
        header.classList.add('header--fill')
    } else {
        header.classList.remove('header--fill')
    }
})