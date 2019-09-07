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

function CalculateTotalSum()
{
    var sum = 0;

    for(var i = 0; i < max; i++)
    {
        if ($("#hdn_" + i).val() == 'True' || $("#hdn_" + i).val() == 'true')
        {
            var price = $("#price_" + i).val();
            var count = $("#count_" + i).val();
            if (price != '' && count != '')
            {
                sum += (parseFloat(price) * parseFloat(count));
            }
        }
    }

    $("#TotalSum").val(sum);
}
*/

// Click Element Action
jQuery('.scroll-to-top.visible').on('click', function (e) {
    $('body, html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

/*$el.on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({
        scrollTop: 0
    }, self.options.delay);
    return false;
});*/
