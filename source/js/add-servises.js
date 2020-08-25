'use strict';

const $btnAdd = document.querySelector('.btn-add');
//const $inpservices = document.querySelectorAll('select[data-js-id="services"]');
//const $inpPrice = document.querySelectorAll('input[data-js-id="price"]');
//const $inpQuantity = document.querySelectorAll('input[data-js-id="quantity"]');
//const $inpCost = document.querySelectorAll('input[data-js-id="cost"]');
const $summ = document.querySelector('#summ span strong');
const $container = document.getElementById('parent-block');
let index = 0;

// const renderPosition = (evt) => {
//   const $elem = evt.target;
//   if ($elem.classList.contains("btn-add")) {
//     index += 1;
//     $elem.value = index;
//     window.modules.render($container, createMarkupCommodity());
//
//   }
// };

const removePosition = (evt) => {
    const $elem = evt.target.closest('.minusIcon');

    if ( $elem !== null && ($elem.tagName === 'BUTTON') && ($elem.classList.contains("minusIcon")) ) {
        let isRemoveFiscal = confirm('Удалить услугу?');
        if (!isRemoveFiscal) {
            evt.preventDefault();
            return;
        }

        /* const btnValue = $elem.value;
        const btnValueCount = parseInt(btnValue);
        const $elemRemove = $container.querySelector(`.position_${btnValueCount}`);
        $elemRemove.remove();
        index -= 1;
        $btnAdd.value = index; */

        //changeCostHandler();
        totalSum();
    }
};

/* const changePriceHandler = (evt) => {
  const $elem = evt.target;
  const attr = $elem.attributes;

  if ( attr['data-js-id'].value === 'services' ) {
    const index = $elem.id.substring(9);
    const inpPrice = document.getElementById(`items_${index}_price`);
    inpPrice.value = price[$elem.value];
  }

} */

/* const changeCostHandler = () => {
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

const isChangedQuantityOrservices = (evt) => {
  const $elem = evt.target;
  const attrs = $elem.attributes;

  if ( attrs['data-js-id'].value === 'quantity' || attrs['data-js-id'].value === 'services' ) {
    changeCostHandler();
  }
} */

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



// Важно! У тега option value должно быть от 0 до последнего элемента в массиве данных. По value ищем нужный элемент в массиве data в функции writeData
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





/* $btnAdd.addEventListener("click", (evt) => {
   // renderPosition(evt);
  change();
  changeCostHandler();
  totalSum();
}); */

// $container.addEventListener("click", (evt) => {
//     removePosition(evt);
// });

$container.addEventListener("change", (evt) => {
    change();
    //isChangedQuantityOrservices(evt);
    totalSum();
});

window.addEventListener('load', (evt) => {
    change();
    //changeCostHandler();
    totalSum();
});