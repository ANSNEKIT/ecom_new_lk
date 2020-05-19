'use strict';

    const $companyBlock = document.querySelector('#accordion');
    const $questItem = document.querySelectorAll('.questItem');

    function onClickBtnSetIcon (evt) {
        const $parentButton = evt.target.closest('button');
        const playIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle"  class="svg-inline--fa fa-play-circle fa-w-16 playIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>';
        const pauseIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause-circle" class="svg-inline--fa fa-pause-circle fa-w-16 pauseIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path></svg>';
        
        if (!$parentButton) {
            return;
        } else if ( ($parentButton.tagName === 'BUTTON') && ($parentButton.classList.contains('btnPlay')) ) {
            evt.preventDefault();
            $parentButton.classList.remove('btnPlay');
            $parentButton.classList.add('btnPause');
            $parentButton.setAttribute('title', 'Остановить кассу');

            $parentButton.innerHTML = '';
            $parentButton.insertAdjacentHTML('afterbegin', pauseIcon);
        } else if ( ($parentButton.tagName === 'BUTTON') && $parentButton.classList.contains('btnPause') ){
            evt.preventDefault();
            $parentButton.classList.remove('btnPause');
            $parentButton.classList.add('btnPlay');
            $parentButton.setAttribute('title', 'Включить кассу');

            $parentButton.innerHTML = '';
            $parentButton.insertAdjacentHTML('afterbegin', playIcon);
        }
    }


    document.addEventListener('DOMContentLoaded', () => {
        for (let i = 0; i < $questItem.length; i++) {
            const statusFiscal = $questItem[i].querySelector('p[data-js-id="status"]').textContent;
            const stateFiscal = $questItem[i].querySelector('p[data-js-id="state"]').textContent;
            const $statusFiscalImg = $questItem[i].querySelector('span[data-js-id="status-img"]');

            const wifiImg = '<img src="img/wifi.png" alt="Касса в сети" width="24" height="24"></img>';
            const noWifiImg = '<img src="img/no-wifi.png" alt="Нет связи с кассой" width="24" height="24">';
            const warningIcon = (
                `<svg 
                     width="24" 
                     height="24" 
                     aria-hidden="true" 
                     focusable="false" 
                     data-prefix="fas" 
                     data-icon="exclamation-triangle"
                     class="svg-inline--fa fa-exclamation-triangle fa-w-18 warningIcon" 
                     role="img"
                     xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 576 512">
                     <path fill="currentColor"
                         d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z">
                     </path>
                 </svg>` 
             )

            if (statusFiscal === 'Давно не было связи') {
                $statusFiscalImg.innerHTML = '';
                $statusFiscalImg.insertAdjacentHTML('afterbegin', noWifiImg);
            } else {
                $statusFiscalImg.innerHTML = '';
                $statusFiscalImg.insertAdjacentHTML('afterbegin', wifiImg);
            }

            if (stateFiscal === 'NOT_REGISTERED' || stateFiscal === 'NOT_FISCALIZED') {
                $statusFiscalImg.innerHTML = '';
                $statusFiscalImg.insertAdjacentHTML('afterbegin', warningIcon);
            }
        }

    });

    $companyBlock.addEventListener('click', (evt) => {
        window.modules.onClickAddConfirmInFiscal(evt);
        onClickBtnSetIcon(evt);
    });

