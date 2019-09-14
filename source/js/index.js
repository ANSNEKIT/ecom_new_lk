let countPosition = 0;
let checkGroupPosition = document.querySelector('.FormGroupProduct');

//let topMenuBtn = document.getElementById("topHiddenMenu");

//let agentGroup = document.querySelector(".agentGoods");
//let isAgent = document.querySelector(".js-isAgent");
//let isAgentTrue = isAgent.querySelector(".js-isAgentTrue");
//let isAgentFalse = isAgent.querySelector(".js-isAgentFalse");
//let agentTrueCheckbox = isAgentTrue.querySelector(".js-AgentTrue");
//let agentFalseCheckbox = isAgentFalse.querySelector(".js-AgentFalse");

checkGroupPosition.addEventListener("click", (evt) => {
    let e = evt.target;
    let template = document.querySelector('#checkItems');
    let clone = document.importNode(template.content, true);
    let checkGroupPosition = document.querySelector('.FormGroupProduct');


    if (e.classList.contains("btn-add")) {
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

        let AgentFalse_count = "AgentFalse_" + countPosition;
        let elemAgentFalse_count = $(clone).find("#AgentFalse_count").attr("id", AgentFalse_count);
        let label_elemAgentFalse = $(clone).find("[for='AgentFalse_count']").attr("for", AgentFalse_count);
        //console.log(elemAgentFalse_count);

        let AgentTrue_count = "AgentTrue_" + countPosition;
        let elemAgentTrue_count = $(clone).find("#AgentTrue_count").attr("id", AgentTrue_count);
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

        checkGroupPosition.append(clone);

        checkSumm();

    } else if (e.classList.contains("btn-remove")) {
        e.parentNode.parentNode.remove();
        countPosition -= 1;
        checkSumm();
    } else if (e.classList.contains("js-AgentTrue")) {
        if (e.parentNode.childNodes[1].checked === true) {
            e.parentNode.parentNode.parentNode.nextSibling.nextSibling.classList.remove("visuallyHidden");
        } else {
            e.parentNode.parentNode.parentNode.nextSibling.nextSibling.classList.add("visuallyHidden");
        }
    } else if (e.classList.contains("js-AgentFalse")) {
        if (e.parentNode.childNodes[1].checked === true) {
            e.parentNode.parentNode.parentNode.nextSibling.nextSibling.classList.add("visuallyHidden");
        } else {
            e.parentNode.parentNode.parentNode.nextSibling.nextSibling.classList.remove("visuallyHidden");
        }
    }
});

checkGroupPosition.addEventListener("change", checkSumm);

function checkSumm () {
    let priceInput = jQuery('.js-price');
    let countInput = jQuery('.js-count');
    let totalSumElem = jQuery('#payments_0_amount');
    let totalSum = 0;

    for(let i=0; i < priceInput.length; i++) {
        var resultPrice = 0;
        var resultCount = 0;
        var resultSum = 0;

        resultCount = parseInt(countInput[i].value);
        resultPrice = parseFloat(priceInput[i].value);
        resultSum = (resultPrice * resultCount);
        resultSum = parseFloat(Math.round(resultSum * 100) / 100).toFixed(2);

        totalSum += parseFloat(resultSum);
        totalSum = parseFloat(Math.floor(totalSum.toFixed(2) * 100) / 100);

    }
    totalSumElem.val(totalSum);
}

/*toggleLeftMenu.addEventListener("click", () => {
    let leftMenu = $("aside.menu");
    leftMenu.toggleClass("menu--active");
});*/

/*
document.addEventListener("click", (evt) => {
    let icon = evt.target;
    let menuTop = $(".userMenu .dropdown-menu");
    console.log(icon.find(".arrow .js-icon")); //.toggleClass("fa-chevron-down fa-chevron-up");

    let boolShow = menuTop.hasClass("show");
    console.log(boolShow);
    if(boolShow === true) {
        //console.log(menuTop.hasClass("show"));
        icon.toggleClass("fa-chevron-up");
    }
});

*/


// Click Element Action
/*jQuery('.scroll-to-top.visible').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 400);
    return false;
});*/





