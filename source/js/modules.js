(function () {
    window.modules = {
        addConfirm: function (evt) {
            let $elem = evt.target;

            if ( ($elem.tagName === 'BUTTON') && ($elem.classList.contains('btn-remove')) ) {
                let $parentRow = $elem.parentNode.parentNode.parentNode;
                let znFiscal = $parentRow.querySelector('p[data-class="znFiscal"]').textContent.trim();
                let isRemoveFiscal = confirm(`Удалить кассу ЗН ${znFiscal}?`);
                if (!isRemoveFiscal) {
                    evt.preventDefault();
                }
            }

            if ( ($elem.tagName === 'path') && ($elem.parentNode.getAttribute('data-icon') === 'trash-alt') ) {
                let $parentRow = $elem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                let idStore = $parentRow.querySelector('th[data-class="idStore"]').textContent.trim();
                let isRemoveStore = confirm(`Удалить точку продаж ${idStore}?`);
                if (!isRemoveStore) {
                    evt.preventDefault();
                }
            }
        }
    };
})();

