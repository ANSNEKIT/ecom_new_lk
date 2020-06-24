'use strict';

const $filterBlockOrders = document.querySelector('form.addCheckForm.js-orders-filter');
const $filterBlockInvoices = document.querySelector('form.addCheckForm.js-invoices-filter');
const $resetBtn = document.querySelector('button[data-js-id="reset"]');
const $filterBtn = document.querySelector('.filterBtn');


const onRestHandler = () => {
    if ($filterBlockOrders !== null) {
        const $pageNumber = $filterBlockOrders.querySelector('#page');
        const $pageSize = $filterBlockOrders.querySelector('#size');
        const $idStore = $filterBlockOrders.querySelector('#storeId');
        const $externalId = $filterBlockOrders.querySelector('#externalId');
        const $startDate = $filterBlockOrders.querySelector('#since_field');
        const $dueDate = $filterBlockOrders.querySelector('#until');
        const $status = $filterBlockOrders.querySelector('#status');
        const $cashier = $filterBlockOrders.querySelector('#cashier');  

        $pageNumber.value = '1';
        $pageSize.value = '25';
        $idStore.value = '';
        $externalId.value = '';
        $startDate.value = '';
        $dueDate.value = '';
        $status.value = 'none';
        $cashier.value = '';

    } else if ($filterBlockInvoices !== null) {
        const $pageNumber = $filterBlockInvoices.querySelector('#page');
        const $pageSize = $filterBlockInvoices.querySelector('#size');
        const $typePayment = $filterBlockInvoices.querySelector('#typePayment');
        const $status = $filterBlockInvoices.querySelector('#status');
        const $startDate = $filterBlockInvoices.querySelector('#since_field');
        const $dueDate = $filterBlockInvoices.querySelector('#since_after');
        const $summ = $filterBlockInvoices.querySelector('#summ');
        const $cashier = $filterBlockInvoices.querySelector('#cashier');  
        
        $pageNumber.value = '1';
        $pageSize.value = '25';
        $typePayment.value = 'Tinkoff';
        $status.value = 'none';
        $startDate.value = '';
        $dueDate.value = '';
        $summ.value = '';
        $cashier.value = '';
    }
}


$filterBtn.addEventListener('click', () => {
    if ( $filterBlockOrders !== null && $filterBlockOrders.classList.contains('visuallyHidden') ) {
        $filterBlockOrders.classList.remove('visuallyHidden');
    } else if ( $filterBlockOrders !== null && !$filterBlockOrders.classList.contains('visuallyHidden') ) {
        $filterBlockOrders.classList.add('visuallyHidden');
    }

    if ( $filterBlockInvoices !== null && $filterBlockInvoices.classList.contains('visuallyHidden') ) {
        $filterBlockInvoices.classList.remove('visuallyHidden');
    } else if ( $filterBlockInvoices !== null && !$filterBlockInvoices.classList.contains('visuallyHidden') ){
        $filterBlockInvoices.classList.add('visuallyHidden');
    }

    if (!$filterBlockOrders && !$filterBlockInvoices) {
        throw new Error("filter icon not found!");
    }
});

$resetBtn.addEventListener('click', () => onRestHandler());
