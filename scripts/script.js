var open = document.getElementById('hamburger');
var elements = document.getElementsByClassName('menu-list');
var overlay = document.querySelector('.overlay');
var nav = document.querySelector('nav');
var icon = document.querySelector('.menu-toggle i');
var changeIcon = true;

// Add click event listeners
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        overlay.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");
    
        if (changeIcon) {
    
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
    
            changeIcon = false;
        }
        else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            changeIcon = true;
        }
    });
}

open.addEventListener("click", function () {
   
    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});




