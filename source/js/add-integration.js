'use strict';

const $inpEmail = document.querySelector('#login');
const $inpPass = document.querySelector('#passwd');
const $btnClear = document.querySelector('button[data-js-id="btnClear"]');

$btnClear.addEventListener('click', () => {
  $inpEmail.value = '';
  $inpPass.value = '';
});

