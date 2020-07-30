'use strict';


const $btnAdd = document.querySelector('.btn-add');
//const $inpServises = document.querySelectorAll('select[data-js-id="servises"]');
//const $inpPrice = document.querySelectorAll('input[data-js-id="price"]');
//const $inpQuantity = document.querySelectorAll('input[data-js-id="quantity"]');
//const $inpCost = document.querySelectorAll('input[data-js-id="cost"]');
const $summ = document.querySelector('#summ span strong');
const $container = document.getElementById('parent-block');
let countPosition = 0;

const price = ['10000', '7000.50', '400', '300', '200'];

const createMarkupCommodity = () => {
  return (
    `<div class="form-group form-row mt-4 position_${countPosition}">
    <div class="col-md-4 mb-3 inp-group parentSelect">
      <select 
        class="form-control inp-form select" 
        id="servises-${countPosition}" 
        name=""
        data-js-id="servises"
      >
        <option value="0" selected>ФН 36</option>
        <option value="1">ФН 15</option>
        <option value="2">Лицензия E-COM kassa mobile 1-20шт</option>
        <option value="3">Лицензия E-COM kassa mobile 21-40шт</option>
        <option value="4">Лицензия E-COM kassa mobile 41+ шт</option>
    </select>
      <label class="label-form" for="servises-${countPosition}">Выберите услугу</label>
    </div>
    
    <div class="col-md-2 mb-4 inp-group">
      <input
        type="text"
        class="form-control inp-form" 
        id="items_${countPosition}_vatType" 
        name="items[${countPosition}].vatType"
        value="Без НДС"
        data-js-id="vat"
        disabled
      />
      <label class="label-form" for="items_${countPosition}_vatType">НДС</label>
    </div>

    <div class="col-md-2 mb-4 inp-group">
      <input 
        type="text" 
        class="form-control inp-form" 
        id="items_${countPosition}_price" 
        data-js-id="price" 
        name="items[${countPosition}].name" 
        value="10000" 
        maxlength="10" 
        pattern="[0-9]+" 
        disabled>
      <label class="label-form" for="items_${countPosition}_price">Цена, руб</label>
      <div class="invalid-tooltip"></div>
    </div>

    <div class="col-md-1 mb-4 inp-group">
      <input 
        type="text" 
        class="form-control inp-form" 
        id="items_${countPosition}_amount" 
        data-js-id="quantity" 
        value="1" 
        pattern="[0-9]+" 
        maxlength="8">
      <label class="label-form" for="items_${countPosition}_amount">Кол-во</label>
      <div class="invalid-tooltip">Укажите количество больше нуля</div>
    </div>

    <div class="col-md-2 mb-4 inp-group">
      <input 
        type="text" 
        class="form-control inp-form" 
        id="items_${countPosition}_cost" 
        data-js-id="cost" 
        value="1" 
        pattern="[0-9]+" 
        maxlength="10"
        disabled>
      <label class="label-form" for="items_${countPosition}_cost">Стоимость</label>
      <div class="invalid-tooltip"></div>
    </div>

    <div class="col-md-1 mb-4">
      <button type="button" class="minusIcon" value="${countPosition}">
        <svg width="40" height="40" aria-hidden="true" focusable="false" data-prefix="far" data-icon="minus-square" class="svg-inline--fa fa-minus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
      </button>
    </div>
  </div>`
  )
}

const renderPosition = (evt) => {
  const $elem = evt.target;
  if ($elem.classList.contains("btn-add")) {
    countPosition += 1;
    $elem.value = countPosition;
    window.modules.render($container, createMarkupCommodity());
    
  }
}

const removePosition = (evt) => {
  const $elem = evt.target.closest('.minusIcon');
    
  const $btnAdd = document.querySelector('.btn-add');

  if ( $elem !== null && ($elem.tagName === 'BUTTON') && ($elem.classList.contains("minusIcon")) ) {
      let isRemoveFiscal = confirm('Удалить услугу?');
      if (!isRemoveFiscal) {
          evt.preventDefault(); 
          return;
      };
      
      const btnValue = $elem.value;
      const btnValueCount = parseInt(btnValue);
      const $elemRemove = $container.querySelector(`.position_${btnValueCount}`);
      $elemRemove.remove();
      countPosition -= 1;
      $btnAdd.value = countPosition;

      changeCostHandler();
      totalSum();
  };
};

const changePriceHandler = (evt) => {
  const $elem = evt.target;
  const attr = $elem.attributes;
    
  if ( attr['data-js-id'].value === 'servises' ) {
    const countInp = $elem.id.substring(9);
    const inpPrice = document.getElementById(`items_${countInp}_price`);
    inpPrice.value = price[$elem.value];
  } 

}

const changeCostHandler = () => {
  const $price = document.querySelectorAll('input[data-js-id="price"]');
  const $quantity = document.querySelectorAll('input[data-js-id="quantity"]');
  const $cost = document.querySelectorAll('input[data-js-id="cost"]');

  for (let i = 0; i < $price.length; i++) {
    let price = parseFloat($price[i].value.trim()) * 100; 
    let quantity = parseFloat($quantity[i].value.trim()) * 100;
    let cost = (price * quantity) / 10000;
    cost = (Math.round(cost * 100) / 100).toFixed(2);

    $cost[i].value = cost;
  }

}

const isChangedCost = (evt) => {
  const $elem = evt.target;
  const attrs = $elem.attributes;

  if ( attrs['data-js-id'].value === 'quantity' || attrs['data-js-id'].value === 'servises' ) {
    changeCostHandler();
  }
}

const totalSum = () => {
  const $cost = document.querySelectorAll('input[data-js-id="cost"]');
  let totalSum = 0.00;

  for (let i = 0; i < $cost.length; i++) {
    let resultSum = parseFloat($cost[i].value.trim()) * 100;
    totalSum = parseFloat(totalSum) + parseFloat(resultSum / 100);
    totalSum = (Math.round(totalSum * 100) / 100).toFixed(2);
  }
  
  $summ.textContent = totalSum;

}

$btnAdd.addEventListener("click", (evt) => {
  renderPosition(evt);
  changeCostHandler();
  totalSum();
});

$container.addEventListener("click", (evt) => {
  removePosition(evt);
});

$container.addEventListener("change", (evt) => {
  changePriceHandler(evt);
  isChangedCost(evt);
  totalSum();
});

window.addEventListener('load', () => {
  changeCostHandler();
  totalSum();
});


