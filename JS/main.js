

function headerShadow() {
    let header = document.querySelector('nav');
    if(window.scrollY > 0) {
        header.classList.add('shadow')
    } else {
        header.classList.remove('shadow');
    }
}

window.addEventListener('scroll', headerShadow);

let nav = document.querySelector('.menu');

function toggleNav() {
   let ul = document.querySelector('ul');
   let navx = document.querySelector('.navx');
   let ham = document.querySelector('.ham')
   ham.classList.toggle('hamOpen') ;
   navx.classList.toggle('menuOpen');
    ul.classList.toggle('mobileMenu');
}

nav.addEventListener('click', toggleNav);