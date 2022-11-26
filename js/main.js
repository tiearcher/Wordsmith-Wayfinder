window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const menu_mobile = document.querySelector('.menu-mobile');

  menu_btn.addEventListener('click' , function (){
    menu_btn.classList.toggle('is-active');
    menu_mobile.classList.toggle('is-active');
  });
}
