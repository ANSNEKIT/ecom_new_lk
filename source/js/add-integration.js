'use strict';

const $inpEmail = document.getElementById('login');
const $inpPass = document.getElementById('passwd');
const $inpUrl = document.getElementById('redirect_url');
const $btnClear = document.querySelector('button[data-js-id="btnClear"]');

$btnClear.addEventListener('click', () => {
  $inpEmail.value = '';
  $inpPass.value = '';
  $inpUrl.value = '';
});

