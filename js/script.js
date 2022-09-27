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


// Get the modal
var modal1 = document.getElementById("mySkills1");
var modal2 = document.getElementById("mySkills2");
var modal3 = document.getElementById("mySkills3");
var modal4 = document.getElementById("mySkills4");
var modal5 = document.getElementById("mySkills5");
var modal6 = document.getElementById("mySkills6");

// Get the button that opens the modal
var btn1 = document.getElementById("iconSkills1");
var btn2 = document.getElementById("iconSkills2");
var btn3 = document.getElementById("iconSkills3");
var btn4 = document.getElementById("iconSkills4");
var btn5 = document.getElementById("iconSkills5");
var btn6 = document.getElementById("iconSkills6");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
btn5.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

span5.onclick = function() {
  modal5.style.display = "none";
}

span6.onclick = function() {
  modal6.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

