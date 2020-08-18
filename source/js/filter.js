'use strict';

const $filterBlockOrders = document.querySelector('form.addCheckForm.js-orders-filter');
const $filterBlockInvoices = document.querySelector('form.addCheckForm.js-invoices-filter');
const $resetBtn = document.querySelector('button[data-js-id="reset"]');
const $filterBtn = document.querySelector('.filterBtn');


const onRestHandler = () => {
    if ($filterBlockOrders !== null) {
        const $pageNumber = document.getElementById('page');
        const $pageSize = document.getElementById('size');
        const $idStore = document.getElementById('storeId');
        const $externalId = document.getElementById('externalId');
        const $startDate = document.getElementById('since');
        const $dueDate = document.getElementById('until');
        const $minSumm = document.getElementById('priceMin');
        const $maxSumm = document.getElementById('priceMax');
        const $status = document.getElementById('status');
        const $cashier = document.getElementById('cashier');  
        const $company = document.getElementById('company');  

        $pageNumber.value = '1';
        $pageSize.value = '25';
        $idStore.value = '';
        $externalId.value = '';
        $startDate.value = '';
        $dueDate.value = '';
        $minSumm.value = '';
        $maxSumm.value = '';
        $status.value = 'none';
        $cashier.value = '';
        if ($company) {
            $company.value = '';
        }
        


    } else if ($filterBlockInvoices !== null) {
        const $pageNumber = document.getElementById('page');
        const $pageSize = document.getElementById('size');
        const $typePayment = document.getElementById('paymentType');
        const $status = document.getElementById('paymentStatus');
        const $startDate = document.getElementById('since');
        const $dueDate = document.getElementById('until');
        const $minSumm = document.getElementById('priceMin');
        const $maxSumm = document.getElementById('priceMax');
        const $cashier = document.getElementById('cashier');  
        
        $pageNumber.value = '1';
        $pageSize.value = '25';
        $typePayment.value = 'none';
        $status.value = 'none';
        $startDate.value = '';
        $dueDate.value = '';
        $minSumm.value = '';
        $maxSumm.value = '';
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
        console.error("filter icon not found!");
    }
});

$resetBtn.addEventListener('click', () => onRestHandler());
