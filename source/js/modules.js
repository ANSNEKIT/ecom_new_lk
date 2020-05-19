(function () {
    window.modules = {
        onClickAddConfirmInFiscal: function (evt) {
            const $elem = evt.target;
            if ( ($elem.tagName === 'BUTTON') && ($elem.classList.contains('btn-remove')) ) {
                const $parentRow = $elem.closest('div[data-js-id="parentBox"]');
                const znFiscal = $parentRow.querySelector('p[data-class="znFiscal"]').textContent.trim();
                const isRemoveFiscal = confirm(`Удалить кассу ЗН ${znFiscal}?`);
                if (!isRemoveFiscal) {
                    evt.preventDefault();
                }
            } else {
                return;
            }
        },

        onClickAddConfirmInStore: function (evt) {
            const $elem = evt.target.closest('.delIcon');

            if ($elem) {
                const $parentRow = $elem.closest('tr');
                const idStore = $parentRow.querySelector('th[data-class="idStore"]').textContent.trim();
                const isRemoveStore = confirm(`Удалить точку продаж ${idStore}?`);
                if (!isRemoveStore) {
                    evt.preventDefault();
                }
            } else {
                return;
            }
        },

        onClickAddConfirmInUsers: function (evt) {
            const $elem = evt.target.closest('.delIcon');

            if ($elem) {
                const isRemoveFiscal = confirm(`Удалить пользователя?`);
                if (!isRemoveFiscal) {
                    evt.preventDefault();
                }
            } else {
                return;
            }

        },

        render: function (parent, template, position = `beforeend`) {
            parent.insertAdjacentHTML(position, template);
        }
    };
})();

