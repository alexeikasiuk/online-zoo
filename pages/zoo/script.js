'user strict';
// burger menu
const burgerMenu = document.querySelector('.burger_icon');
const menuBody = document.querySelector('.menu_body');
const headerLogo = document.querySelector('header').querySelector('.logo');

// open/close burger menu by click on burger menu icon
burgerMenu.addEventListener('click', function (e) {
  burgerMenu.classList.toggle('_active');
  document.body.classList.toggle('_lock');
  menuBody.classList.toggle('_active');
  headerLogo.classList.toggle('burger_logo');
});
// close opened burger menu by click on free area burger menu
menuBody.addEventListener('click', (e) => {
  if (menuBody.classList.contains('_active') && e.target === menuBody) {
    burgerMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    headerLogo.classList.toggle('burger_logo');
  }
});

// subscribe form
document.onsubmit = (e) => {
  e.preventDefault();
  alert(
    `Success subscribe!!!\nemail: ${
      document.querySelector('[type="email"]').value
    }`
  );
};

// show/hide description
const showButton = document.querySelector('.read-more');
const toggleDescription = (e) => {
  const button = e.target;
  const section = document.querySelector('.secondary-description');

  if (section.style.height) {
    section.style.height = null;
    section.classList.add('short');
  } else {
    section.style.height = section.scrollHeight + 'px';
    section.addEventListener(
      'transitionend',
      () => {
        section.classList.remove('short');
      },
      {
        once: true,
      }
    );
  }
};
showButton.addEventListener('click', toggleDescription);
