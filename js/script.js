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
//     navBar.style.top='-100%';

//     } )
// }
