$companyBlock = document.querySelector('#accordion');

$companyBlock.addEventListener('click', (evt) => {
    let $elem = evt.target;

    if (($elem.tagName === 'BUTTON') && ($elem.classList.contains('btn-remove'))) {
        let isRemoveFiscal = confirm('Удалить кассу?');
        if (!isRemoveFiscal) {
            evt.preventDefault();
        }
    }
});
