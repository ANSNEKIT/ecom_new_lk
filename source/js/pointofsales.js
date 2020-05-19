'use strict';
    const $companyBlock = document.querySelector('.companyBlock');

    $companyBlock.addEventListener('click', (evt) => {
        window.modules.onClickAddConfirmInStore(evt);
    });


