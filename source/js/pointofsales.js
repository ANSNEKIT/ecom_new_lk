(function () {
    let $companyBlock = document.querySelector('.companyBlock');

    $companyBlock.addEventListener('click', function (evt) {
        window.modules.addConfirm(evt);
    });
})();

