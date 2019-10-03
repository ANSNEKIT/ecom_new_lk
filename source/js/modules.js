(function () {
    window.modules = {
        onClickAddConfirmInFiscal: function (evt) {
            let $elem = evt.target;
            if ( ($elem.tagName === 'BUTTON') && ($elem.classList.contains('btn-remove')) ) {
                let $parentRow = $elem.parentNode.parentNode.parentNode;
                let znFiscal = $parentRow.querySelector('p[data-class="znFiscal"]').textContent.trim();
                let isRemoveFiscal = confirm(`Удалить кассу ЗН ${znFiscal}?`);
                if (!isRemoveFiscal) {
                    evt.preventDefault();
                }

            } else {
                return;
            }
        },

        onClickAddConfirmInStore: function (evt) {
            let $elem = evt.target.closest('a.delIcon');

            if ($elem) {
                let $parentRow = $elem.closest('tr');
                let idStore = $parentRow.querySelector('th[data-class="idStore"]').textContent.trim();
                let isRemoveStore = confirm(`Удалить точку продаж ${idStore}?`);
                if (!isRemoveStore) {
                    evt.preventDefault();
                }
            } else {
                return;
            }
        },

        onClickAddConfirmInUsers: function (evt) {
            let $elem = evt.target.closest('a.delIcon');

            if ($elem) {
                let isRemoveFiscal = confirm(`Удалить пользователя?`);
                if (!isRemoveFiscal) {
                    evt.preventDefault();
                }
            } else {
                return;
            }

        },
    };
})();

