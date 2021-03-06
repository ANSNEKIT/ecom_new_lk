'use strict';

const $searchFirmBtn = document.querySelector('#searchFirmBtn');
const $serchBikBtn = document.querySelector('#searchBikBtn');
const $submit = document.querySelector('#submit');
const $navTabs = document.querySelector('.nav-tabs');
const $tabs = [...document.querySelectorAll('.nav-tabs a[data-toggle="tab"]')];
const $nextBtn = [...document.querySelectorAll('.next-step')];
const $prevBtn = [...document.querySelectorAll('.prev-step')];

const firmData = {
  data: {},
  URL: '/signUp/search/firm/',
  errorName: '',
};

const bankData = {
  data: {},
  URL: '/signUp/search/bank/',
  errorName: '',
};
 
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

const loadingModeOn = (idBtn) => {
  const $btn = document.getElementById(idBtn);
  const $loaderBtn = $btn.querySelector('.spinner-grow');
  $loaderBtn.classList.remove('visuallyHidden');
  $btn.setAttribute('disabled', true);
};

const fetchData = async (type, param, idBtn) => {
  try {
    const response = await fetch(type.URL + param);
    if (response.ok) {
      const data = await response.json();
      type.data = data;
    }

    const $btn = document.getElementById(idBtn);
    const $loaderBtn = $btn.querySelector('.spinner-grow');
    $loaderBtn.classList.add('visuallyHidden');
    $btn.removeAttribute('disabled');
    
    renderData(type);
  } catch (err) {
    type.errorName = type.data.error;
    console.error(err);

    const $loaderBtn = $searchFirmBtn.querySelector('.spinner-grow');
    $loaderBtn.classList.add('visuallyHidden');
    $searchFirmBtn.removeAttribute('disabled');
  }
};

const renderData = (dataType) => {
  const { message } = dataType.data;
  if (dataType === firmData) {
    const $firmName = document.getElementById('firmName');
    const $inn = document.getElementById('inn');
    const $kpp = document.getElementById('kpp');
    const $ogrn = document.getElementById('firm_ogrn');
    const $legalAddress = document.getElementById('legalAddress');
    const $firmError = document.getElementById('searchInnError');

    $firmName.value = message.name;
    $inn.value = message.taxNumber;
    $kpp.value = message.kpp;
    $ogrn.value = message.ogrn;
    $legalAddress.value = message.legalAddress;
    $firmError.textContent = dataType.data.errorName;
  } else if (dataType === bankData) {
    const $bankName = document.getElementById('bank_name');
    const $bankInn = document.getElementById('bank_inn');
    const $bankBik = document.getElementById('bank_bik');
    const $bankAccount = document.getElementById('bank_corr_account');
    const $bankAddress = document.getElementById('bank_address');
    const $bankError = document.getElementById('searchBikError');

    $bankName.value = message.name;
    $bankInn.value = message.inn;
    $bankBik.value = message.bic;
    $bankAccount.value = message.corr_account;
    $bankAddress.value = message.address;
    $bankError.textContent = dataType.data.errorName;
  }
};

const searchInnBtnHandler = (evt) => {
  const $innInput = document.querySelector('#inn-search');
  let innValue = $innInput.value.trim();

  if (innValue) {
    loadingModeOn('searchFirmBtn');
    fetchData(firmData, innValue, 'searchFirmBtn');
    
    sessionStorage.setItem('searchedAccount', JSON.stringify(firmData));
  } else {
    evt.preventDefault();
  }
};

const serchBikBtnHandler = (evt) => {
  const $bikInput = document.querySelector('#bic');
  let bikValue = $bikInput.value.trim();

  if (bikValue) {
    loadingModeOn('searchBikBtn');
    fetchData(bankData, bikValue, 'searchBikBtn');
    
    sessionStorage.setItem('searchedBank', JSON.stringify(bankData));
  } else {
    evt.preventDefault();
  }
};

const stepBtnHandler = (evt) => {
  if (evt.target.classList.contains('next-step')) {
    const active = document.querySelector('.wizard .nav-tabs li.active');
    nextTab(active);
  } else if (evt.target.classList.contains('prev-step')) {
    const active = document.querySelector('.wizard .nav-tabs li.active');
    prevTab(active);
  }
};

document.addEventListener('click', stepBtnHandler);

$navTabs.addEventListener('click', changeTabs);

$searchFirmBtn.addEventListener('click', searchInnBtnHandler);
$serchBikBtn.addEventListener('click', serchBikBtnHandler);

$submit.addEventListener('click', (evt) => {
  sessionStorage.removeItem('searchedAccount');
  sessionStorage.removeItem('searchedBank');

  document.removeEventListener('click', stepBtnHandler);
});

window.addEventListener('load', () => {
  const $forms = [...document.getElementsByClassName('needs-validation')];

  const validation = $forms.forEach(($form) => {
    $form.addEventListener('submit', function(evt) {
      if ($form.checkValidity() === false) {
        evt.preventDefault();
        evt.stopPropagation();
      }
      $form.classList.add('was-validated');
    }, false);
  });
}, false);
