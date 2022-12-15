window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const menu_mobile = document.querySelector('.menu-mobile');

  menu_btn.addEventListener('click' , function (){
    menu_btn.classList.toggle('is-active');
    menu_mobile.classList.toggle('is-active');
  });
}

function myFunction1() {
  var x = document.getElementById("pairing-hide");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("upcoming-hide");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
