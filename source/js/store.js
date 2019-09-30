let $companyBlock = document.querySelector('#accordion');
let $questItem = document.querySelectorAll('.questItem');


document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < $questItem.length; i++) {
        let statusFiscal = $questItem[i].querySelector('p[data-js-id="status"]').textContent;
        let $statusFiscalImg = $questItem[i].querySelector('span[data-js-id="status-img"]');
        if (statusFiscal === 'Давно не было связи') {
            $statusFiscalImg.innerHTML = '<img src="img/no-wifi.png" alt="Нет связи с кассой">'
        } else {
            $statusFiscalImg.innerHTML = '<img src="img/wifi.png" alt="Касса в сети">'
        }
    }

});



$companyBlock.addEventListener('click', (evt) => {
    let $elem = evt.target;

    if (($elem.tagName === 'BUTTON') && ($elem.classList.contains('btn-remove'))) {
        let isRemoveFiscal = confirm('Удалить кассу?');
        if (!isRemoveFiscal) {
            evt.preventDefault();
        }
    }
});
