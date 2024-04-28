const menu = document.querySelector('.nav-icon')
const closeNav = document.querySelector('.close-nav')
const bgCloseNav = document.querySelector('.bg-close-nav');
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add("open-nav")
    bgCloseNav.style.display = "block";
})

closeNav.addEventListener('click', () => {
  CloseNav();
})
bgCloseNav.addEventListener('click', () => {
  CloseNav();
})

function CloseNav()
{
  nav.classList.remove("open-nav")
  bgCloseNav.style.display = "none";
  console.log("closenav function was called");
}

const element = document.querySelector('.hero-image');


/* element.addEventListener('click', () => {

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);
    element.addEventListener('touchend', handleTouchEnd);
    
    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      console.log("Touch started");
    }
    
    function handleTouchMove(event) {
      const deltaX = event.touches[0].clientX - startX;
      element.style.left = `${deltaX}px`;
      console.log("swipe started");
    }
    
    function handleTouchEnd(event) {
      startX = null;
    }
}); */