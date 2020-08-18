'use strict';

    let count = 0;
    let countAddPaynentType = 0;
    const $commodityItems = document.querySelector('fieldset[data-js-id="commodity-items"]');
    const $payment = document.getElementById('payment');
    const $parentPaymentType = document.getElementById('parent-block');
  
    if (!$commodityItems) {
        throw new Error("Нет формы добавления товарных позиций!");
    }

    /* const createMarkupCommodity = () => {
        return (
            `<div data-position class="position_${count} mb-5 bdr-bottom">
            <div class="form-group goods">
              <div class="form-row">
                <div class="col-md-12 mb-4 inp-group">
                  <input 
                    type="text" 
                    class="form-control inp-form" 
                    id="items_${count}_name" 
                    name="items[${count}].name"
                    value="Товар"
                    placeholder='Кружка "My-brand" или Доставка'
                    maxlength="126" 
                    required>
                  <label class="label-form" for="items_${count}_name">Наименование</label>
                  <div class="invalid-feedback">Укажите название товарной позиции</div>
                </div>
              </div>
      
              <div class="form-row">
                <div class="col-md-4 mb-4 inp-group">
                  <input 
                    type="text" 
                    class="form-control inp-form" 
                    id="items_${count}_price"
                    data-js-id="js-price" 
                    name="items[${count}].name"
                    value=""
                    placeholder="1.00"
                    maxlength="12" 
                    pattern="[0-9]{1,9}\.[0-9]{2}" 
                    required>
                  <label class="label-form" for="items_${count}_price">Цена, руб</label>
                  <div class="invalid-tooltip">Укажите цену в рублях с копейками. Разделитель точка</div>
                </div>
                <div class="col-md-4 mb-4 inp-group">
                  <input 
                    type="text" 
                    class="form-control inp-form" 
                    id="items_${count}_amount"
                    data-js-id="js-quantity" 
                    value="1"
                    pattern="[0-9]{1,8}(\.[0-9]{3})*"
                    maxlength="12">
                  <label class="label-form" for="items_${count}_amount">Количество</label>
                  <div class="invalid-tooltip">Укажите количество больше нуля</div>
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
      
              <div class="form-row">
                <div class="col-md-6 mb-4 inp-group parentSelect">
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
                <div class="col-md-6 mb-4 inp-group parentSelect">
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
      
              <p>Являетесь ли вы платежным агентом?</p>
      
              <div class="form-group form-row js-isAgent">
                <div class="form-check col-sm-2 mb-2 js-isAgentFalse" id="isAgentFalse_${count}">
                  <input type="radio" class="form-check-input jsAgentFalseInp"  id="AgentFalse_${count}" name="agent_${count}" value="${count}" checked>
                  <label class="form-check-label" for="AgentFalse_${count}">
                    <span></span>
                    Нет
                  </label>
                </div>
                <div class="form-check col-sm-2 mb-2 js-isAgentTrue" id="isAgentTrue_${count}">
                  <input type="radio" class="form-check-input jsAgentTrueInp" id="AgentTrue_${count}" name="agent_${count}" value="${count}">
                  <label class="form-check-label" for="AgentTrue_${count}">
                    <span></span>
                    Да
                  </label>
                </div>
              </div>
      
            </div>
      
            <fieldset class="form-group agentGoods visuallyHidden">
              <div class="form-row mb-3 pr-1 pl-1 inp-group parentSelect">
                <select class="form-control inp-form select" id="items_${count}_agentType" name="items[${count}].agentType">
                  <option value="PAYING_AGENT" selected>платежный агент</option>
                  <option value="PAYING_SUBAGENT">платежный субагент</option>
                  <option value="BANK_PAYING_AGENT">Банковский платежный агент</option>
                  <option value="BANK_PAYING_SUBAGENT">Банковский платежный субагент</option>
                  <option value="ATTORNEY">Поверенный</option>
                  <option value="COMMISSION_AGENT">Комиссионер</option>
                  <option value="ANOTHER">Прочие агенты</option>
                </select>
                <label class="label-form" for="items_${count}_agentType">Тип агента</label>
              </div>
      
              <div class="form-row">
                <div class="col-md-6 mb-3 inp-group">
                  <input 
                    type="text" 
                    class="form-control inp-form" 
                    id="items_${count}_agentTaxNumber"
                    name="items[${count}].agentTaxNumber"
                    pattern="(^$)|([0-9]{10})|([0-9]{12})"
                    maxlength="12">
                  <label class="label-form" for="items_${count}_agentTaxNumber">ИНН агента</label>
                  <div class="invalid-feedback">ИНН должен содержать 10 или 12 цифр</div>
                </div>
                <div class="col-md-6 mb-3 inp-group">
                  <input 
                    type="text" 
                    class="form-control inp-form inp-required" 
                    id="items_${count}_supplierName" 
                    name="items[${count}].supplierName"
                    data-js-id="agent-name"
                    maxlength="126"
                    placeholder='ООО "Тестовая компания"'>
                  <label class="label-form" for="items_${count}_supplierName">Наименование поставщика <span class="badge label-required">(*)</span></label>
                  <div class="invalid-feedback">Обязательное поле</div>
                </div>
              </div>
      
              <div class="form-row">
                <div class="col-md-6 mb-3 inp-group">
                  <input 
                    type="tel" 
                    class="form-control inp-form inp-required" 
                    id="items_${count}_supplierPhones" 
                    name="items[${count}].supplierPhones"
                    data-js-id="agent-phone"
                    placeholder="+71112223344" 
                    value=""
                    maxlength="100" 
                    pattern="([\+]7[0-9]{10}[,\s]*)+">
                  <label class="label-form" for="items_${count}_supplierPhones">Телефон поставщика <span class="badge label-required">(*)</span></label>
                  <div class="invalid-feedback">Введите номер/номера телефона в формате +7ХХХХХХХХХХ</div>
                </div>
                <div class="col-md-6 mb-3 inp-group">
                  <input 
                    type="text" 
                    class="form-control inp-form inp-required" 
                    id="items_${count}_supplierTaxNumber"
                    name="items[${count}].supplierTaxNumber"
                    data-js-id="agent-inn"
                    pattern="([0-9]{10})|([0-9]{12})"
                    maxlength="12">
                  <label class="label-form" for="items_${count}_supplierTaxNumber">ИНН Поставщика
                    <span class="badge label-required">(*)</span>
                  </label>
                  <div class="invalid-feedback">ИНН должен содержать 10 или 12 цифр</div>
                </div>
              </div>
            </fieldset>
      
            <div class="col-sm-12 text-right mb-3">
              <button type="button" class="btn btn-remove mt-1" name="action" value="${count}">Удалить</button>
            </div>
      
          </div>`
        )
    } */

    const renderPosition = (evt) => {
      /* const $elem = evt.target;
      if ($elem.classList.contains("btn-add")) {
        count += 1;
        $elem.value = count;
        window.modules.render($commodityItems, createMarkupCommodity()); */
        checkSumm();
      // }
    }

    const removePosition = (evt) => {
        const $elem = evt.target;
        const $btnAdd = document.querySelector('.btn-add');

        if ( ($elem.tagName === 'BUTTON') && ($elem.classList.contains("btn-remove")) ) {
            let isRemoveFiscal = confirm('Удалить товарную позицию?');
            if (!isRemoveFiscal) {
                evt.preventDefault(); 
                return;
            };
           /*  
            const btnValue = $elem.value;
            const btnValueCount = parseInt(btnValue);
            const $elemRemove = $commodityItems.querySelector(`.position_${btnValueCount}`);
            $elemRemove.remove();
            count -= 1;
            $btnAdd.value = count; */

            checkSumm();
        };
    };

    const createMarkupPaymentType = (count) => {
        return (
            `<div class="form-group form-row mt-3">
            <div class="col-md-6 mb-3 inp-group parentSelect">
              <select class="form-control inp-form select" id="payments_${count}_type" name="payments[${count}].type">
                <option value="CASH">Наличными</option>
                <option value="CREDIT_CARD" selected>Банковская карта</option>
                <option value="PRE_PAID">Предоплата</option>
                <option value="POST_PAID">Постоплата</option>
                <option value="COUNTER_OFFER">Встречное предоставление</option>
              </select>
              <label class="label-form" for="payments_${count}_type">Вид оплаты</label>
            </div>
            <div class="col-md-6 mb-3 inp-group">
              <input 
                type="text" 
                class="form-control inp-form" 
                id="payments_${count}_summ" 
                data-js-id="summ"
                value="1.00"
                pattern="[0-9]{1,9}\.[0-9]{2}"
                maxlength="12"
                >
              <label class="label-form" for="payments_${count}_summ">Cумма, руб</label>
            </div>

            <div class="col-sm-12 text-right mb-3">
              <button type="button" id="btn-remove_${count}" class="btn btn-remove mt-1" name="action" value="${count}">Удалить вид оплаты</button>
            </div>

            <hr width="100%" style="border: 2px solid #ccc">
          </div>`
        );
    }

    const renderPaymentType = (evt) => {       
        const $elem = evt.target;
        if ($elem.classList.contains("btn-add")) {
            countAddPaynentType += 1;
            $elem.value = countAddPaynentType;
            window.modules.render($parentPaymentType, createMarkupPaymentType(countAddPaynentType));
            checkPaymetTypeSumm();
            checkTotalSumAndAutoSumm();
        }
    }

    const removePaymentType = (evt) => {
        const $elem = evt.target;
        const $btnAdd = document.querySelector('.btn-add');

        if ( ($elem.tagName === 'BUTTON') && ($elem.classList.contains("btn-remove")) ) {
            let isRemovePaymentType = confirm('Удалить вид оплаты?');
            if (!isRemovePaymentType) {
                evt.preventDefault(); 
                return;
            };
            
            const btnValue = $elem.value;
            const btnValueCount = parseInt(btnValue);
            const $elemsRemove = $parentPaymentType.querySelectorAll(`div.form-group.form-row`);
            
            for(let i = 0; i < $elemsRemove.length; i++) {
                $elemsRemove[btnValueCount].remove();
            };
            console.log($elemsRemove);
            countAddPaynentType -= 1;
            $btnAdd.value = countAddPaynentType;

            checkPaymetTypeSumm();
            checkTotalSumAndAutoSumm();
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
        const $totalSumElem = document.querySelector('#autosumm span strong');
        
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

        $totalSumElem.textContent = totalSum;
        checkTotalSumAndAutoSumm();
    };

    const checkPaymetTypeSumm = () => {
        const $inpSumm = document.querySelectorAll('input[data-js-id="summ"]');
        const $inpTotalSumm = document.querySelector('input[data-js-id="totalSum"]');

        let totalSum = 0.00;

        for (let i = 0; i < $inpSumm.length; i++) {
            let resultSum = 0.00;

            if ($inpSumm[i].value.trim() === '') {
                resultSum = 0.00;
            } else {
                resultSum = parseFloat($inpSumm[i].value.trim()) * 100;
            }

            resultSum = (Math.round(resultSum * 100) / 10000).toFixed(2);

            totalSum = (parseFloat(totalSum) + parseFloat(resultSum));
            totalSum = (Math.round(totalSum * 100) / 100).toFixed(2);
        }

        $inpTotalSumm.value = totalSum;
    }

    const checkTotalSumAndAutoSumm = () => {
        const $totalSumElem = document.querySelector('#autosumm span strong');
        const $inpTotalSumm = document.querySelector('input[data-js-id="totalSum"]');
        const $errorTotalSumm = $payment.querySelector('.errorTotalSumm');

        const totalSumElem = parseFloat($totalSumElem.textContent) * 100; 
        const totalSumPayment = parseFloat($inpTotalSumm.value) * 100;

        const diff = (Math.round(totalSumElem - totalSumPayment) / 100).toFixed(2);

        if ($totalSumElem.textContent !== $inpTotalSumm.value) {

          if (diff > 0) {
            $errorTotalSumm.textContent = `Автосумма и итоговая сумма не равны. Добавтьте оплату на ${diff} руб`;
          } else if (diff < 0){
            $errorTotalSumm.textContent = `Автосумма и итоговая сумма не равны. Оплата превышает на ${Math.abs(diff)} руб`;
          }
        } else {
            $errorTotalSumm.textContent = '';
        }

    }


    $commodityItems.addEventListener("click", (evt) => {
      //renderPosition(evt);
      removePosition(evt);
      toggleAgentCheckbox(evt);
    });

    /* $payment.addEventListener("click", (evt) => {
        //renderPaymentType(evt);
        //removePaymentType(evt);
      });
 */
    window.addEventListener('load', () => {
      checkSumm();
      checkPaymetTypeSumm();
    });        

    $commodityItems.addEventListener("change", checkSumm);
    $payment.addEventListener("change", () => {
        checkPaymetTypeSumm();
        checkTotalSumAndAutoSumm();
    });
    /* $inpTotalSumm.addEventListener("change", () => {
        checkTotalSumAndAutoSumm();
    }) */
