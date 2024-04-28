var timeOutStarted = false;
let slideIndex = 0;
var slideDelay = 5000;
let timeOutId = setTimeout(plusSlides, slideDelay,++slideIndex);
showSlides(slideIndex);
showSlidesAuto();

function showSlides(n)
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length)
    {
        slideIndex = 1;
    }

    if (n < 1)
    {
        slideIndex = slides.length;
    }
    
  
    //hide all
    for (i = 0; i < slides.length; i++)
    {
      if(i == slideIndex-1)
      {
      }
      else
      {
        hideElement(slides[i]);
      }
    }
  
    //disable dots
    for (i = 0; i < dots.length; i++)
    {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    //reveal right slide and dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
    timeOutId = setTimeout(autoSlide, slideDelay,slideIndex);
    timeOutStarted = true;
  }

// Next/previous controls
function plusSlides(n) {
    clearTimeout(timeOutId);
  showSlides(slideIndex += n);
}
function autoSlide(n){
    clearTimeout(timeOutId);
  showSlides(slideIndex += 1);
}
// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(timeOutId);
  showSlides(slideIndex = n);
}
function hideElement(element)
{
  element.style.display = "none";
}


