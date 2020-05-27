'use strict';

    let count = 0;
    const $commodityItems = document.querySelector('fieldset[data-js-id="commodity-items"]');


    if (!$commodityItems) {
        throw new Error("Нет формы добавления товарных позиций!");
    }

    const createMarkup = () => {
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
                    value=""
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
    }

    const renderPosition = (evt) => {
        const $elem = evt.target;
        if ($elem.classList.contains("btn-add")) {
            count += 1;
            $elem.value = count;
            window.modules.render($commodityItems, createMarkup());
            checkSumm();
        }
    }

    /* const renderPosition = (evt) => {
        const $elem = evt.target;
        const template = document.querySelector('#checkItems').content;
        const clone = document.importNode(template, true);
        

        if ($elem.classList.contains("btn-add")) {
            countPosition += 1;
            let position_count = "position_" + countPosition;
            let elemPosition_count = $(clone).children(".position_count").removeClass("position_count").addClass(position_count);

            let items_count_name = "items_" + countPosition + "_name";
            let attrNameCountName = "items[" + countPosition + "].name";
            let elemItems_count_name = $(clone).find("#items_count_name").attr("id", items_count_name).attr("name", attrNameCountName);
            let label_count_name = $(clone).find("[for='items_count_name']").attr("for", items_count_name);
            //console.log(elemItems_label_count_name);

            let items_count_price = "items_" + countPosition + "_price";
            let attrNameCountPrice = "items[" + countPosition + "].price";
            let elemItems_count_price = $(clone).find("#items_count_price").attr("id", items_count_price).attr("name", attrNameCountPrice);
            let label_count_price = $(clone).find("[for='items_count_price']").attr("for", items_count_price);
            //console.log(elemItems_label_count_price);

            let items_count_paymentObject = "items_" + countPosition + "_paymentObject";
            let attrNamePaymentObject = "items[" + countPosition + "].paymentObject";
            let elemItems_count_paymentObject = $(clone).find("#items_count_paymentObject").attr("id", items_count_paymentObject).attr("name", attrNamePaymentObject);
            let label_count_paymentObject = $(clone).find("[for='items_count_paymentObject']").attr("for", items_count_paymentObject);
            //console.log(elemItems_count_paymentObject);

            let items_count_vatType = "items_" + countPosition + "_vatType";
            let attrNameCountvatType = "items[" + countPosition + "].vatType";
            let elemItems_count_vatType = $(clone).find("#items_count_vatType").attr("id", items_count_vatType).attr("name", attrNameCountvatType);
            let label_count_vatType = $(clone).find("[for='items_count_vatType']").attr("for", items_count_vatType);

            let items_count_amount = "items_" + countPosition + "_amount";
            let attrNameCountamount = "items[" + countPosition + "].amount";
            let elemItems_count_amount = $(clone).find("#items_count_amount").attr("id", items_count_amount);
            let label_count_amount = $(clone).find("[for='items_count_amount']").attr("for", items_count_amount);
            //console.log(elemItems_count_amount);

            let items_count_paymentMethod = "items_" + countPosition + "_paymentMethod";
            let attrNameCountPaymentMethod = "items[" + countPosition + "].paymentMethod";
            let elemItems_count_paymentMethod = $(clone).find("#items_count_paymentMethod").attr("id", items_count_paymentMethod).attr("name", attrNameCountPaymentMethod);
            let label_count_paymentMethod = $(clone).find("[for='items_count_paymentMethod']").attr("for", items_count_paymentMethod);
            //console.log(elemItems_count_paymentMethod);

            let isAgentFalse_count = "isAgentFalse_" + countPosition;
            let elemIsAgentFalse_count = $(clone).find("#isAgentFalse_count").attr("id", isAgentFalse_count);
            //console.log(elemIsAgentFalse_count);

            let isAgentTrue_count = "isAgentTrue_" + countPosition;
            let elemIsAgentTrue_count = $(clone).find("#isAgentTrue_count").attr("id", isAgentTrue_count);
            //console.log(elemIsAgentTrue_count);

            let AgentAttrName_count = "agent_" + countPosition;

            let AgentFalse_count = "AgentFalse_" + countPosition;
            let elemAgentFalse_count = $(clone).find("#AgentFalse_count").attr("id", AgentFalse_count);
            let AgentFalseAttrName_count = elemAgentFalse_count.attr("name", AgentAttrName_count);
            let label_elemAgentFalse = $(clone).find("[for='AgentFalse_count']").attr("for", AgentFalse_count);
            //console.log(AgentFalseAttrName_count);

            let AgentTrue_count = "AgentTrue_" + countPosition;
            let elemAgentTrue_count = $(clone).find("#AgentTrue_count").attr("id", AgentTrue_count);
            let AgentTrueAttrName_count = elemAgentTrue_count.attr("name", AgentAttrName_count);
            let label_elemAgentTrue = $(clone).find("[for='AgentTrue_count']").attr("for", AgentTrue_count);
            //console.log(elemAgentTrue_count);

            let items_count_agentType = "items_" + countPosition + "_agentType";
            let attrNameitems_count_agentType = "items[" + countPosition + "].agentType";
            let elemItems_items_count_agentType = $(clone).find("#items_count_agentType").attr("id", items_count_agentType).attr("name", attrNameitems_count_agentType);
            let label_items_count_agentType = $(clone).find("[for='items_count_agentType']").attr("for", items_count_agentType);
            //console.log(elemItems_items_count_agentType);

            let items_count_agentTaxNumber = "items_" + countPosition + "_agentTaxNumber";
            let attrNameitems_count_agentTaxNumber = "items[" + countPosition + "].agentTaxNumber";
            let elemItems_items_count_agentTaxNumber = $(clone).find("#items_count_agentTaxNumber").attr("id", items_count_agentTaxNumber).attr("name", attrNameitems_count_agentTaxNumber);
            let label_items_count_agentTaxNumber = $(clone).find("[for='items_count_agentTaxNumber']").attr("for", items_count_agentTaxNumber);
            //console.log(elemItems_items_count_agentTaxNumber);

            let items_count_supplierName = "items_" + countPosition + "_supplierName";
            let attrNameitems_count_supplierName = "items[" + countPosition + "].supplierName";
            let elemItems_items_count_supplierName = $(clone).find("#items_count_supplierName").attr("id", items_count_supplierName).attr("name", attrNameitems_count_supplierName);
            let label_items_count_supplierName = $(clone).find("[for='items_count_supplierName']").attr("for", items_count_supplierName);
            //console.log(elemItems_items_count_supplierName);

            let items_count_supplierPhones = "items_" + countPosition + "_supplierPhones";
            let attrNameitems_count_supplierPhones = "items[" + countPosition + "].supplierPhones";
            let elemItems_items_count_supplierPhones = $(clone).find("#items_count_supplierPhones").attr("id", items_count_supplierPhones).attr("name", attrNameitems_count_supplierPhones);
            let label_items_count_supplierPhones = $(clone).find("[for='items_count_supplierPhones']").attr("for", items_count_supplierPhones);
            //console.log(elemItems_items_count_supplierPhones);

            let items_count_supplierTaxNumber = "items_" + countPosition + "_supplierTaxNumber";
            let attrNameitems_count_supplierTaxNumber = "items[" + countPosition + "].supplierTaxNumber";
            let elemItems_items_count_supplierTaxNumber = $(clone).find("#items_count_supplierTaxNumber").attr("id", items_count_supplierTaxNumber).attr("name", attrNameitems_count_supplierTaxNumber);
            let label_items_count_supplierTaxNumber = $(clone).find("[for='items_count_supplierTaxNumber']").attr("for", items_count_supplierTaxNumber);
            //console.log(elemItems_items_count_supplierTaxNumber);

            let items_count_btnRemove = "remove.item." + countPosition;
            let elemItems_btnRemove = $(clone).find(".btn-remove").attr("value", items_count_btnRemove);
            //console.log(elemItems_btnRemove);


            $commodityItems.append(clone);

            checkSumm();
        };
    }; */

    const removePosition = (evt) => {
        const $elem = evt.target;
        const $btnAdd = document.querySelector('.btn-add');

        if ( ($elem.tagName === 'BUTTON') && ($elem.classList.contains("btn-remove")) ) {
            let isRemoveFiscal = confirm('Удалить товарную позицию?');
            if (!isRemoveFiscal) {
                evt.preventDefault(); 
                return;
            };
            
            const btnValue = $elem.value;
            const btnValueCount = parseInt(btnValue);
            const $elemRemove = $commodityItems.querySelector(`.position_${btnValueCount}`);
            $elemRemove.remove();
            count -= 1;
            $btnAdd.value = count;

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
                resultPrice = parseFloat($priceInput[i].value.trim());
            }

            if ($quantityInput[i].value.trim() === '') {
                resultQuantity = 0.000;
            } else {
                resultQuantity = parseFloat($quantityInput[i].value.trim());
            }

            resultSum = (resultPrice * resultQuantity);
            resultSum = (Math.round(resultSum * 100) / 100).toFixed(2);

            totalSum = parseFloat(totalSum) + parseFloat(resultSum);
            totalSum = (Math.floor(totalSum * 100) / 100).toFixed(2);
        }

        $totalSumElem.value = totalSum;
    };

    $commodityItems.addEventListener("click", function(evt) {
        renderPosition(evt);
        removePosition(evt);
        toggleAgentCheckbox(evt);
    });
        

    $commodityItems.addEventListener("change", checkSumm);









