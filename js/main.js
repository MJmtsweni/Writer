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

function _(id) {
  return document.getElementById(id);
}

function submitform() {
  _("submit").disabled = true;
  _("status").innerHTML = "please wait...";

  var formdata = new FormData();
  formdata.append("name", _("name").value);
  formdata.append("email", _("email").value);
  formdata.append("message", _("message").value);
  var ajax = new XMLHttpRequest();
  ajax.open("POST", "contact_me.php", true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      if (ajax.responseText == "success") {
        _("contact-form").innerHTML =
          "<h2>Thanks" + _("name").value + ".your message has been sent.</h2>";
      } else {
        _("status").innerHTML = ajax.responseText;
        _("submit").disabled = false;
      }
    }
  };
  ajax.send(formdata);
}
