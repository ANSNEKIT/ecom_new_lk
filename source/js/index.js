let agentGroup = document.getElementsByClassName("agentGoods");
let isAgentTrue = document.getElementById("isAgentTrue");
let isAgentFalse = document.getElementById("isAgentFalse");
let agentTrueCheckbox = document.getElementById("AgentTrue");
let agentFalseCheckbox = document.getElementById("AgentFalse");


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


