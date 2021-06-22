var header = document.querySelector('header');
var burger = document.querySelector('.burger');
var navBar = document.querySelector('nav'); 
var close = document.querySelector('.close');

burger.addEventListener("click", navBarSlide);

function navBarSlide(){
    navBar = document.querySelector('header nav ul');
    navBar.style.top='0';
    
}

close.addEventListener("click", closeNavBar);

function closeNavBar(){
    navBar.style.top='-100vh';

}

var navLinks = document.querySelectorAll('header ul a li');

// for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener("click", function(){
//     navBar.style.top='-100vh';

//     } )
// }

var portofolioTitle = document.querySelectorAll('.portofolio div span h2');
var image = document.querySelectorAll('.image');

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover",titleshow);
    image[i].addEventListener("mouseout",titlehide);

    function titleshow() {
        portofolioTitle[i].style.opacity='1';
    }
    function titlehide() {
        portofolioTitle[i].style.opacity='0';
        
    }
}

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
