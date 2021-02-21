'use strict';

const $serchBtn = document.querySelector('#search-btn');
const $nextBtnFirst = document.querySelector('.next-step');
const $submit = document.querySelector('#submit');
const $nextBtn = [...document.querySelectorAll('.next-step')];
const $prevBtn = [...document.querySelectorAll('.prev-step')];
const $navTabs = document.querySelector('.nav-tabs');
const $tabs = [...document.querySelectorAll('.nav-tabs a[data-toggle="tab"]')];

const changeTabs = (evt) => {
  const active = document.querySelector('.wizard .nav-tabs li.active');
  active.classList.remove('active');
  if (evt.target.parentNode.tagName === 'LI') {
    evt.target.parentNode.classList.add('active');
  } else if (evt.target.parentNode.parentNode.tagName === 'LI') {
    evt.target.parentNode.parentNode.classList.add('active');
  }
};

const nextTab = (elem) => {
  elem.nextElementSibling.querySelector('a[data-toggle="tab"]').click();
};

const prevTab = (elem) => {
  elem.previousElementSibling.querySelector('a[data-toggle="tab"]').click();
};


document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('searched')) {
    $serchBtn.setAttribute('disabled', true);
    $nextBtnFirst.removeAttribute('disabled');
  }
});

$navTabs.addEventListener('click', changeTabs);

$serchBtn.addEventListener('click', (evt) => {
  const $accountBtn = document.querySelector('#account');
  const $bicBtn = document.querySelector('#bic');

  let accountVal = $accountBtn.value.trim();
  let bicVal = $bicBtn.value.trim();

  if (accountVal && bicVal) {
    sessionStorage.setItem('searched', 'true');

    $serchBtn.setAttribute('disabled', true);
    $nextBtnFirst.removeAttribute('disabled');
  } else {
    evt.preventDefault();
  }
});

$submit.addEventListener('click', (evt) => {
  sessionStorage.removeItem('searched');

  $serchBtn.removeAttribute('disabled');
  $nextBtnFirst.setAttribute('disabled', true);
});

$nextBtn.forEach((el) => {
  el.addEventListener('click', () => {
    const active = document.querySelector('.wizard .nav-tabs li.active');
      active.nextElementSibling.classList.remove('disabled');
      nextTab(active);
  });
});

$prevBtn.forEach((el) => {
  el.addEventListener('click', () => {
    var active = document.querySelector('.wizard .nav-tabs li.active');
    prevTab(active);
  });
});

window.addEventListener('load', () => {
  const $form = document.getElementsByClassName('needs-validation');

  $form.addEventListener('submit', function(evt) {
    if ($form.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    }
    $form.classList.add('was-validated');
  }, false);
}, false);
