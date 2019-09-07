let agentGroup = document.getElementsByClassName("agentGoods");
let isAgentTrue = document.getElementById("isAgentTrue");
let isAgentFalse = document.getElementById("isAgentFalse");
let agentTrueCheckbox = document.getElementById("AgentTrue");
let agentFalseCheckbox = document.getElementById("AgentFalse");



/*
var checkYes = () => {
    if (agentTrueCheckbox.checked === true) {
        agentGroup[0].removeAttribute("disabled");
    } else {
        agentGroup[0].setAttribute("disabled", "");
    }
};

var checkNo = () => {
    if (agentFalseCheckbox.checked === true) {
        agentGroup[0].setAttribute("disabled", "");
    } else {
        agentGroup[0].removeAttribute("disabled");
    }
};

isAgentTrue.addEventListener("click", checkYes);
isAgentFalse.addEventListener("click", checkNo);

*/

var checkYes = () => {
    if (agentTrueCheckbox.checked === true) {
        agentGroup[0].classList.remove("visuallyHidden");
    } else {
        agentGroup[0].classList.add("visuallyHidden");
    }
};

var checkNo = () => {
    if (agentFalseCheckbox.checked === true) {
        agentGroup[0].classList.add("visuallyHidden");
    } else {
        agentGroup[0].classList.remove("visuallyHidden");
    }
};

isAgentTrue.addEventListener("click", checkYes);
isAgentFalse.addEventListener("click", checkNo);

/*

var max = 50;

function AddPositionButtonClick() {
    var positions = $("#positions").val();

    if (positions < max) {
        $("#position_" + positions).attr("style", "display: block;");
        $("#hdn_" + positions).val(true);
        positions++;
        $("#positions").val(positions);
    }
    else {
        alert("Максимальное количество позиций в чеке - " + max + ".");
    }
}

function DeletePositionClick(number) {
    if (confirm("Вы действительно хотите удалить позицию из чека?"))
    {
        $("#position_" + number).attr("style", "display: none;");
        $("#hdn_" + number).val(false);
        CalculateTotalSum();
    }
}

*/

// Click Element Action
jQuery('.scroll-to-top.visible').on('click', function (e) {
    $('body, html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

function calculateTotalSum() {
    var priceInput = $('.js-price');
    var countInput = $('.js-count');
    var totalSumElem = $('#payments_0_amount');
    var totalSum = 0;

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





