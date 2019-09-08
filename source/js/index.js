//let addBtn = document.querySelector('.btnAddPosition');
//let removeBtn = document.querySelector('.btn-remove');
let countPosition = 0;
let checkPosition = document.querySelector('.position_0');
let checkGroupPosition = document.querySelector('.FormGroupProduct');

let agentGroup = document.getElementsByClassName("agentGoods");
let isAgent = document.getElementsByClassName("js-isAgent");
let isAgentTrue = isAgent[0].getElementsByClassName("js-isAgentTrue");
let isAgentFalse = isAgent[0].getElementsByClassName("js-isAgentFalse");
let agentTrueCheckbox = isAgentTrue[0].getElementsByClassName("form-check-input");
let agentFalseCheckbox = isAgentFalse[0].getElementsByClassName("form-check-input");

isAgentTrue[0].addEventListener("click", () => {
    if (agentTrueCheckbox[0].checked === true) {
        agentGroup[0].classList.remove("visuallyHidden");
    } else {
        agentGroup[0].classList.add("visuallyHidden");
    }
});

isAgentFalse[0].addEventListener("click", () => {
    if (agentFalseCheckbox[0].checked === true) {
        agentGroup[0].classList.add("visuallyHidden");
    } else {
        agentGroup[0].classList.remove("visuallyHidden");
    }
});

checkGroupPosition.addEventListener("click", (evt) => {
    let addOrRemoveBtn = evt.target;
    let template = document.querySelector('#checkItems');
    let clone = document.importNode(template.content, true);
    let checkGroupPosition = document.querySelector('.FormGroupProduct');


    if (addOrRemoveBtn.classList.contains("btn-add")) {
        countPosition += 1;
        let position_count = "position_" + countPosition;
        let elemPosition_count = $(clone).children(".position_count").removeClass("position_count").addClass(position_count);

        let items_count_name = "items_" + countPosition + "_name";
        let attrNameCountName = "items_[" + countPosition + "].name";
        let elemItems_count_name = $(clone).find("#items_count_name").attr("id", items_count_name).attr("name", attrNameCountName);
        let elemItems_label_count_name = $(clone).find("[for='items_count_name']").attr("for", items_count_name);
        //console.log(elemItems_label_count_name);

        let items_count_price = "items_" + countPosition + "_price";
        let attrNameCountPrice = "items_[" + countPosition + "].price";
        let elemItems_count_price = $(clone).find("#items_count_price").attr("id", items_count_price).attr("name", attrNameCountPrice);
        let elemItems_label_count_price = $(clone).find("[for='items_count_price']").attr("for", items_count_price);
        //console.log(elemItems_label_count_price);

        let items_count_paymentObject = "items_" + countPosition + "_paymentObject";
        let attrNamePaymentObject = "items_[" + countPosition + "].paymentObject";
        let elemItems_count_paymentObject = $(clone).find("#items_count_paymentObject").attr("id", items_count_paymentObject).attr("name", attrNamePaymentObject);
        let elemItems_label_count_paymentObject = $(clone).find("[for='items_count_paymentObject']").attr("for", items_count_paymentObject);
        //console.log(elemItems_count_paymentObject);

        let items_count_vatType = "items_" + countPosition + "_vatType";
        let attrNameCountvatType = "items_[" + countPosition + "].vatType";
        let elemItems_count_vatType = $(clone).find("#items_count_vatType").attr("id", items_count_vatType).attr("name", attrNameCountvatType);
        let elemItems_label_count_vatType = $(clone).find("[for='items_count_vatType']").attr("for", items_count_vatType);

        let items_count_amount = "items_" + countPosition + "_amount";
        let attrNameCountamount = "items_[" + countPosition + "].amount";
        let elemItems_count_amount = $(clone).find("#items_count_amount").attr("id", items_count_amount);
        let elemItems_label_count_amount = $(clone).find("[for='items_count_amount']").attr("for", items_count_amount);
        //console.log(elemItems_count_amount);

        let items_count_paymentMethod = "items_" + countPosition + "_paymentMethod";
        let attrNameCountPaymentMethod = "items_[" + countPosition + "].paymentMethod";
        let elemItems_count_paymentMethod = $(clone).find("#items_count_amount").attr("id", items_count_paymentMethod).attr("name", attrNameCountPaymentMethod);
        let elemItems_label_count_paymentMethod = $(clone).find("[for='items_count_amount']").attr("for", items_count_paymentMethod);
        console.log(elemItems_count_paymentMethod);

        //checkGroupPosition.append(clone);

    } else if (addOrRemoveBtn.classList.contains("btn-remove")) {
        console.log(addOrRemoveBtn.parentNode.parentNode);
        addOrRemoveBtn.parentNode.parentNode.remove();
    }
});

// Click Element Action
jQuery('.scroll-to-top.visible').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

function calculateTotalSum() {
    let priceInput = $('.js-price');
    let countInput = $('.js-count');
    let totalSumElem = $('#payments_0_amount');
    let totalSum = 0;

    for(let i=0; i < priceInput.length; i++) {
        var resultPrice = 0;
        var resultCount = 0;

        resultCount += parseInt(countInput.val());
        resultPrice += parseFloat(priceInput.val());

        totalSum += resultPrice * resultCount;
        totalSum = parseFloat(Math.round(totalSum * 100) / 100).toFixed(2);
    }

    totalSumElem.val(totalSum);
}





