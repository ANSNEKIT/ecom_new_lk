'use strict';

const $btnAdd = document.querySelector('.btn-add');
const $summ = document.querySelector('#summ span strong');
const $container = document.getElementById('parent-block');
let index = 0;

const totalSum = () => {
    const $cost = document.querySelectorAll('input[data-js-id="cost"]');
    let totalSum = 0.00;

    for (let i = 0; i < $cost.length; i++) {
        let resultSum = parseFloat($cost[i].value.trim()) * 100;
        totalSum = parseFloat(totalSum) + parseFloat(resultSum / 100);
        totalSum = (Math.round(totalSum * 100) / 100).toFixed(2);
    }

    $summ.textContent = totalSum;
};


let servicesData;

class Service {
    constructor(props) {
        this.id = props.id;
        this.price = props.price;
        this.nds = props.nds;
    }
}

const services = function (str) {
    const arr = [];
    const tmp = str.split("|");
    for(let i = 0; i < tmp.length - 1; i++) {
        const elem = tmp[i].split(", ");
        for(let j = 0; j < elem.length - 1; j++) {
            arr.push(
                new Service({id: elem[0], price: elem[1], nds: elem[2]})
            );
        }
    }
    return arr;
};

const validationSelectedData = (data) => (value) =>  {
    const size = data.length;
    let count = 0;
    do{
        if(Number(data[count].id) === Number(value)){
            return data[count];
        } else {
            count += 1;
        }
    } while (size -1  !== count)
};

const retrieveData = (data) => (value) =>  {
    return  validationSelectedData(services(data))(value)

};

const changeTaxVariant = (nds) => {
    if(nds === "0" || nds === "" || nds === null || nds === undefined) {
        return 'Без НДС'

    } else{
        return nds
    }
};

const change = () => {
    const serviceIdSel =[...document.querySelectorAll(`select[data-js-id]`)];
    const $price = document.querySelectorAll('input[data-js-id="price"]');
    const $nds = document.querySelectorAll('input[data-js-id="vat"]');
    const $quantity = document.querySelectorAll('input[data-js-id="quantity"]');
    const $cost = document.querySelectorAll('input[data-js-id="cost"]');
    for(let i = 0; i < serviceIdSel.length; i++){
        let result = retrieveData(servicesData)(serviceIdSel[i].value);
        $price[i].value = `${result.price / 100}.${result.price % 100 === 0 ? '00' : result.price % 100}`;
        $nds[i].value = changeTaxVariant(result.nds)
        $quantity[i].value = +$quantity[i].value < 1 ? 1 : $quantity[i].value
        let cost = (result.price * $quantity[i].value) / 100;
        cost = (Math.round(cost * 100) / 100).toFixed(2)
        $cost[i].value = cost;
    }
}

const limitCount = (evt) => {
    const $elem = evt.target
    const $quantity = document.querySelectorAll('input[data-js-id="quantity"]');

    if ($elem.tagName === 'SELECT' && $elem.value === '24') {
        const count = $elem.id.substring(9);
        for (const item of $quantity) {
            if (item.id === `items_${count}_amount`) {
                item.setAttribute('min', '1');
                item.setAttribute('max', '20');
            };
        }

    } else if ($elem.tagName === 'SELECT' && $elem.value === '27') {
        const count = $elem.id.substring(9);
        for (const item of $quantity) {
            if (item.id === `items_${count}_amount`) {
                item.setAttribute('min', '21');
                item.setAttribute('max', '40');
            };
        }
    } else if ($elem.tagName === 'SELECT' && $elem.value === '25') {
        const count = $elem.id.substring(9);
        for (const item of $quantity) {
            if (item.id === `items_${count}_amount`) {
                item.setAttribute('min', '41');
                item.setAttribute('max', '1000000');
            };
        }
    } else if ($elem.tagName === 'SELECT' && $elem.value !== ('24' || '27' || '25') ) {
        const count = $elem.id.substring(9);
        for (const item of $quantity) {
            if (item.id === `items_${count}_amount`) {
                item.setAttribute('min', '1');
                item.setAttribute('max', '1000000');
            };
        }
    }
}


$container.addEventListener("change", (evt) => {
    //change();
    limitCount(evt);
    totalSum();
});

window.addEventListener('load', (evt) => {
    //change();
    limitCount(evt);
    totalSum();
});