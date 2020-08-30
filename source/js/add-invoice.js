'use strict';

const $commodityItems = document.querySelector('fieldset[data-js-id="invoice-commodity-items"]');

if (!$commodityItems) {
  throw new Error('Нет формы добавления товарных позиций!');
}

const renderPosition = (evt) => {
  checkSumm();
}

const removePosition = (evt) => {
  const $elem = evt.target;
  const $btnAdd = document.querySelector('.btn-add');

  if (($elem.tagName === 'BUTTON') && ($elem.classList.contains("btn-remove"))) {
    let isRemoveFiscal = confirm('Удалить товарную позицию?');
    if (!isRemoveFiscal) {
      evt.preventDefault();
      return;
    };

    checkSumm();
  };
};

const toggleAgentCheckbox = (evt) => {
  const $elem = evt.target;
  if ($elem.classList.contains("jsAgentTrueInp")) {
    const checkboxTrueVal = $elem.value;
    const checkboxIdCountTrue = parseInt(checkboxTrueVal);
    const $elemParent = $commodityItems.querySelector(`div.position_${checkboxIdCountTrue}`);
    const $elemToggle = $elemParent.querySelector(`fieldset.agentGoods`);
    const $agentName = $elemParent.querySelector(`input[data-js-id="agent-name"]`);
    const $agentPhone = $elemParent.querySelector(`input[data-js-id="agent-phone"]`);
    const $agentInn = $elemParent.querySelector(`input[data-js-id="agent-inn"]`);

    if ($elem.checked === true) {
      $elemToggle.classList.remove("visuallyHidden");

      $agentName.setAttribute('required', '');
      $agentPhone.setAttribute('required', '');
      $agentInn.setAttribute('required', '');

    }

  } else if ($elem.classList.contains("jsAgentFalseInp")) {
    const checkboxFalseVal = $elem.value;
    const checkboxIdCountFalse = parseInt(checkboxFalseVal);
    const $elemParent = $commodityItems.querySelector(`div.position_${checkboxIdCountFalse}`);
    const $elemToggle = $elemParent.querySelector(`fieldset.agentGoods`);
    const $agentName = $elemParent.querySelector(`input[data-js-id="agent-name"]`);
    const $agentPhone = $elemParent.querySelector(`input[data-js-id="agent-phone"]`);
    const $agentInn = $elemParent.querySelector(`input[data-js-id="agent-inn"]`);

    if ($elem.checked === true) {
      $elemToggle.classList.add("visuallyHidden");

      $agentName.removeAttribute('required');
      $agentPhone.removeAttribute('required');
      $agentInn.removeAttribute('required');
    }
  }
};

const checkSumm = () => {
  const $priceInput = document.querySelectorAll('input[data-js-id="js-price"]');
  const $quantityInput = document.querySelectorAll('input[data-js-id="js-quantity"]');
  const $totalSumElem = document.querySelector('input[data-js-id="totalSum"]');
  let totalSum = 0.00;

  for(let i=0; i < $priceInput.length; i++) {
      let resultPrice = 0.00;
      let resultQuantity = 0.00;
      let resultSum = 0.00;

      if ($priceInput[i].value.trim() === '') {
          resultPrice = 0.00;
      } else {
          resultPrice = parseFloat($priceInput[i].value.trim()) * 100;
      }

      if ($quantityInput[i].value.trim() === '') {
          resultQuantity = 0.000;
      } else {
          resultQuantity = parseFloat($quantityInput[i].value.trim()) * 100;
      }

      resultSum = (resultPrice * resultQuantity) / 10000;
      resultSum = (Math.round(resultSum * 100) / 100).toFixed(2);

      totalSum = (parseFloat(totalSum) + parseFloat(resultSum));
      totalSum = (Math.round(totalSum * 100) / 100).toFixed(2);
  }

  $totalSumElem.value = totalSum;
};

$commodityItems.addEventListener("click", (evt) => {
//renderPosition(evt);
removePosition(evt);
toggleAgentCheckbox(evt);
});

window.addEventListener('load', () => {
checkSumm();
});        

$commodityItems.addEventListener("change", checkSumm);


