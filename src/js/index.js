const burger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.querySelectorAll('.menu_link');

burger.addEventListener('click', () => {
    burger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menuLink.forEach(item =>{
item.addEventListener('click', () => {
    burger.classList.remove('hamburger_active');
    menu.classList.remove('menu_active');
});
});



