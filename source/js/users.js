(function () {
    let $table = document.querySelector('table.table');

    $table.addEventListener('click', (evt) => {
        window.modules.onClickAddConfirmInUsers(evt);
    });

})();