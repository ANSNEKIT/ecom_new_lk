'use strict';
    const $table = document.querySelector('table[data-js-id="table-users"]');

    $table.addEventListener('click', (evt) => {
        window.modules.onClickAddConfirmInUsers(evt);
    });
