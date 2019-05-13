

function headerShadow() {
    let header = document.querySelector('nav');
    console.log(window.scrollY)
    if(window.scrollY >= 5) {
        header.classList.add('shadow')
    } else {
        header.classList.remove('shadow');
    }
}

function removeShadow() {
    let header = document.querySelector('nav');
    
}

window.addEventListener('scroll', debounce(headerShadow));

let nav = document.querySelector('.menu');

function toggleNav() {
   let ul = document.querySelector('ul');
   
   let navx = document.querySelector('.navx');
   let ham = document.querySelector('.ham');
   ham.classList.toggle('hamOpen');
   navx.classList.toggle('menuOpen');
   ul.classList.toggle('mobileMenu');
    }

nav.addEventListener('click', toggleNav);

let li = document.querySelectorAll('li');

function closeNav() {
    let ul = document.querySelector('ul');
    let navx = document.querySelector('.navx');
    let ham = document.querySelector('.ham');
    
    ham.classList.toggle('hamOpen');
    navx.classList.toggle('menuOpen');
    ul.classList.remove('mobileMenu');
    
}

li.forEach(i => i.addEventListener('click', closeNav))

// Debounce function,not my code, copied from javascript30.com //
    function debounce(func, wait = 50, immediate = true) {
      let timeout;
      return function() {
        let context = this, args = arguments;
        let later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

  