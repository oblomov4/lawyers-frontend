const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1209: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // And if we need scrollbar
});

const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  // loop: true,

  slidesPerView: 1.3,
  spaceBetween: 20,
  // freeMode: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//Работа с burger

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile-menu');

burger.onclick = (e) => {
  mobileMenu.classList.add('open');
  document.body.style.overflowY = 'hidden';
};

const closeMenu = document.querySelector('.close');

if (closeMenu) {
  closeMenu.onclick = (e) => {
    mobileMenu.classList.remove('open');
    document.body.style.overflowY = '';
  };
}

const panelLink = document.querySelectorAll('.nav__panel-a');

panelLink.forEach(
  (elem) =>
    (elem.onclick = (e) => {
      mobileMenu.classList.remove('open');
      document.body.style.overflowY = '';
    }),
);

const orderCallBurger = document.getElementById('order-call-burger');

orderCallBurger.onclick = () => {
  mobileMenu.classList.remove('open');
  document.body.style.overflowY = '';
  document.querySelector('.order__call').classList.add('open');
};

const search = document.getElementById('search');
const searchBlock = document.querySelector('.search-mobile-wrapper');
const closeSearch = document.getElementById('close-search');

search.onclick = (e) => {
  searchBlock.classList.add('open');
};

closeSearch.onclick = () => {
  searchBlock.classList.remove('open');
};

const orderCallBtn = document.getElementById('order-call');
const orderCall = document.querySelector('.order__call');
const orderCallClose = document.querySelector('.order__call-close');

orderCallBtn.onclick = (e) => {
  orderCall.classList.add('open');
};

if (orderCallClose) {
  orderCallClose.onclick = (e) => {
    orderCall.classList.remove('open');
  };
}

const freeOrderCall = document.getElementById('free-order-call');

freeOrderCall.onclick = (e) => {
  document.querySelector('.order__call').classList.add('open');
};
