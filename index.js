document.addEventListener('DOMContentLoaded', function() {
  
  let slideIndex = 0;
  showSlides();
    
  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  
    slideIndex++;
    if (slideIndex > slides.length) { 
      slideIndex = 1;
    }
    
    slides[slideIndex-1].style.display = "block";  

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2500); /* this is how the time works*/
  }
});