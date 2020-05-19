'use strict';

const $fieldsetNomenclature = document.querySelector('.FormGroupProduct');
const $btnAdd = document.querySelector('.btnAddPosition .btn-add');

const createMarkup = () => {
  const countBtnAdd = $btnAdd.getAttribute('data-js-count');
  let count = parseInt(countBtnAdd) + 1;
  $btnAdd.setAttribute('data-js-count', count);
  
  return (
    `<div class="mb-5 bdr-bottom position_${count}">
      <div class="form-row">
        <div class="col-md-4 mb-4 inp-group">
          <input type="text" class="form-control inp-form" id="items_${count}_name" name="items[${count}].name" value=""
                  maxlength="128" placeholder="Введите название товара/услуги" required>
          <label class="label-form" for="items_${count}_name">Наименование</label>
          <div class="valid-tooltip">Укажите название товарной позиции</div>
        </div>
        
        <div class="col-md-4 mb-4 inp-group parentSelect">
          <select class="form-control inp-form select" id="items_${count}_paymentObject" name="items[${count}].paymentObject">
            <option value="COMMODITY" selected>Товар</option>
            <option value="EXCISE">Подакцизный товар</option>
            <option value="JOB">Работа</option>
            <option value="SERVICE">Услуга</option>
            <option value="GAMBLING_BET">Ставка азартной игры</option>
            <option value="GAMBLING_PRIZE">Выигрыш азартной игры</option>
            <option value="LOTTERY">Лотерейный билет</option>
            <option value="LOTTERY_PRIZE">Выигрыш лотереи</option>
            <option value="INTELLECTUAL_ACTIVITY">Интеллектуальная собственность</option>
            <option value="PAYMENT">Платёж</option>
            <option value="AGENT_COMMISSION">Вознаграждение агента</option>
            <option value="COMPOSITE">Составной предмет расчёта</option>
            <option value="ANOTHER">Иной предмет расчёта</option>
            <option value="PROPERTY_RIGHT">Имущественное право</option>
            <option value="NON_OPERATING_GAIN">Внереализационный доход</option>
            <option value="INSURANCE_PREMIUM">Страховые взносы</option>
            <option value="SALES_TAX">Торговый сбор</option>
            <option value="RESORT_FEE">Курортный сбор</option>
          </select>
          <label class="label-form" for="items_${count}_paymentObject">Предмет расчета</label>
        </div>

        <div class="col-md-4 mb-4 inp-group parentSelect">
          <select class="form-control inp-form select" id="items_${count}_paymentMethod" name="items[${count}].paymentMethod">
            <option value="FULL_PAYMENT" selected>Полный расчёт</option>
            <option value="FULL_PREPAYMENT">Полная предоплата</option>
            <option value="PREPAYMENT">Предоплата</option>
            <option value="ADVANCE">Аванс</option>
            <option value="PARTIAL_PAYMENT">Частичная оплата и кредит</option>
            <option value="CREDIT">Передача в кредит</option>
            <option value="CREDIT_PAYMENT">Оплата кредит</option>
          </select>
          <label class="label-form" for="items_${count}_paymentMethod">Признак расчета</label>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-4 mb-4 inp-group">
          <input type="text" class="form-control inp-form js-price" id="items_${count}_price" name="items[${count}].name"
                  value="" placeholder="1.00" maxlength="15" pattern="[0-9]{1,12}\.[0-9]{2}" required>
          <label class="label-form" for="items_${count}_price">Цена, руб</label>
          <div class="valid-tooltip">Укажите цену в рублях</div>
        </div>
        <div class="col-md-4 mb-4 inp-group">
          <input type="number" class="form-control inp-form js-number" id="items_${count}_amount" value="1"
                  min="1">
          <label class="label-form" for="items_${count}_amount">Количество</label>
          <div class="valid-tooltip">Укажите количество больше нуля</div>
        </div>
        <div class="col-md-4 mb-4 inp-group parentSelect">
          <select class="form-control inp-form select" id="items_${count}_vatType" name="items[${count}].vatType">
            <option value="VAT_NONE" selected>Без НДС</option>
            <option value="VAT_0PCT">НДС 0%</option>
            <option value="VAT_10PCT">НДС 10%</option>
            <option value="VAT_110PCT">НДС 10/110</option>
            <option value="VAT_20PCT">НДС 20%</option>
            <option value="VAT_120PCT">НДС 20/120</option>
          </select>
          <label class="label-form" for="items_${count}_vatType">НДС</label>
        </div>
      </div>

      <div class="d-flex">
        <div class="custom-checkbox mb-3 mx-4">
          <input type="checkbox" id="marking-${count}" class="custom-control-input" name="marking" value="">
          <label class="custom-control-label" for="marking-${count}">Маркированный товар</label>
        </div>
        <div class="btnRemovePosition ml-auto">
          <button type="button" class="btn btn-remove" name="action" value="${count}">Удалить</button>
        </div>
      </div>
    </div>`
  )
};

const render = (parent, template, position = `beforeend`) => {
  parent.insertAdjacentHTML(position, template);
};

const checkSumm = () => {
  const $priceInput = $fieldsetNomenclature.querySelectorAll('input.js-price');
  const $numberInput = $fieldsetNomenclature.querySelectorAll('input.js-number');
  const $totalSum = document.querySelector('input[data-js-id="result_amount"]');
  let totalSum = 0.00;

  for (let i = 0; i < $priceInput.length; i++) {
    let resultPrice = 0.00;
    let resultnumber = 0;
    let resultSum = 0.00;

    if ($priceInput[i].value.trim() === '') {
      resultPrice = 0.00
    } else {
      resultPrice = parseFloat($priceInput[i].value.trim());
    }

    if ($numberInput[i].value.trim() === '') {
      resultnumber = 0;
    } else {
      resultnumber = parseInt($numberInput[i].value.match(/[0-9.]+/));
    }
 
    resultSum = (resultPrice * resultnumber);
    resultSum = (Math.round(resultSum * 100) / 100).toFixed(2);

    totalSum = parseFloat(totalSum) + parseFloat(resultSum);
    totalSum = (Math.floor(totalSum * 100) / 100).toFixed(2);
  }

  $totalSum.value = totalSum;
};

$fieldsetNomenclature.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'BUTTON' && evt.target.classList.contains('btn-remove')) {
    let isRemoveFiscal = confirm('Удалить товарную позицию?');
    if (!isRemoveFiscal) {
        evt.preventDefault(); 
        return;
    };

    let countBtnRemove = evt.target.value.trim();
    countBtnRemove = parseInt(countBtnRemove);
    const $findPosition = $fieldsetNomenclature.querySelector(`.position_${countBtnRemove}`);
    $findPosition.remove();

    let countBtnAdd = $btnAdd.getAttribute('data-js-count');

    if (countBtnAdd) {
      countBtnAdd = parseInt(countBtnAdd) - 1;
      $btnAdd.setAttribute('data-js-count', countBtnAdd);
    } else {
      return;
    }
    

  }
});

$fieldsetNomenclature.addEventListener('change', checkSumm);

$btnAdd.addEventListener('click', () => {
  render($fieldsetNomenclature, createMarkup());
});
