/*================================= typing animation ================*/
var typed = new Typed(".typing",{
    strings:["","Test Engineer", "Mechatronic Engineer","Automatician", "Project Manager"],
    typeSpeed:80,
    Backspeed:60,
    loop:true
})

/*================================= Reveal animation ================*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
