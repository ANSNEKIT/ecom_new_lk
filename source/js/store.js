(function () {
    let $companyBlock = document.querySelector('#accordion');
    let $questItem = document.querySelectorAll('.questItem');


    document.addEventListener('DOMContentLoaded', () => {
        for (let i = 0; i < $questItem.length; i++) {
            let statusFiscal = $questItem[i].querySelector('p[data-js-id="status"]').textContent;
            let $statusFiscalImg = $questItem[i].querySelector('span[data-js-id="status-img"]');
            if (statusFiscal === 'Давно не было связи') {
                $statusFiscalImg.innerHTML = '<img src="img/no-wifi.png" alt="Нет связи с кассой" width="24" height="24">'
            } else {
                $statusFiscalImg.innerHTML = '<img src="img/wifi.png" alt="Касса в сети" width="24" height="24">'
            }
        }

    });

    $companyBlock.addEventListener('click', (evt) => {
        let $elemButton = evt.target.closest('BUTTON');

        let playIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle"  class="svg-inline--fa fa-play-circle fa-w-16 playIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>';

        let pauseIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause-circle" class="svg-inline--fa fa-pause-circle fa-w-16 pauseIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path></svg>';

        if ($elemButton.tagName === 'BUTTON' && $elemButton.classList.contains('btnPause')) {
            evt.preventDefault();
            $elemButton.classList.remove('btnPause');
            $elemButton.classList.add('btnPlay');
            $elemButton.setAttribute('title', 'Включить кассу');

            $elemButton.innerHTML = playIcon;
        } else if ($elemButton.tagName === 'BUTTON' && $elemButton.classList.contains('btnPlay')) {
            evt.preventDefault();
            $elemButton.classList.remove('btnPlay');
            $elemButton.classList.add('btnPause');
            $elemButton.setAttribute('title', 'Остановить кассу');

            $elemButton.innerHTML = pauseIcon;
        }

        if (!$elemButton) return;

        window.modules.addConfirm(evt);
    });

})();


