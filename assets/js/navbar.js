const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");

/* This function drops down the menu on mobile screens when the corresponding 
toggle item is clicked (event listener). */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "MENU";
    }
    else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "FERMER";
    }
}

toggle.addEventListener("click", toggleMenu, false);

/* Close the menu when the user click anywhere on the page */
function closeMenu(e) {
    let isClickInside = menu.contains(e.target);
    if (!isClickInside && menu.querySelector(".active")) {
        menu.classList.remove("active");
    }
}

document.addEventListener("click", closeMenu, false);