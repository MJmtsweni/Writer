//Selecting DOM Items
const menu_btn = document.querySelector(".menu-btn");
const menu_nav = document.querySelector(".menu-mobile");
const nav_items = document.querySelectorAll(".nav-item");
const main_nav = document.querySelector("main-nav");

//Set initial Menu state
let showMenu = false;

menu_btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu_btn.classList.add("close");
    menu_nav.classList.add("show");
    nav_items.forEach((item) => item.classList.add("show"));

    //set Menu state
    showMenu = true;
  } else {
    menu_btn.classList.remove("close");
    menu_nav.classList.remove("show");
    nav_items.forEach((item) => item.classList.remove("show"));

    //set Menu state
    showMenu = false;
  }
}
