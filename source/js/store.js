'use strict';

    const $companyBlock = document.querySelector('#accordion');
    const $questItem = document.querySelectorAll('.questItem');

    function onClickBtnSetIcon (evt) {
        const $parentButton = evt.target.closest('button');
        const playIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle"  class="svg-inline--fa fa-play-circle fa-w-16 playIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>';
        const pauseIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause-circle" class="svg-inline--fa fa-pause-circle fa-w-16 pauseIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path></svg>';
        
        if (!$parentButton) {
            return;
        } 
        
        /* else if ( ($parentButton.tagName === 'BUTTON') && ($parentButton.classList.contains('btnPlay')) ) {
            $parentButton.classList.remove('btnPlay');
            $parentButton.classList.add('btnPause');
            $parentButton.setAttribute('title', 'Остановить кассу');

            $parentButton.innerHTML = '';
            $parentButton.insertAdjacentHTML('afterbegin', pauseIcon);
        } else if ( ($parentButton.tagName === 'BUTTON') && $parentButton.classList.contains('btnPause') ){
            $parentButton.classList.remove('btnPause');
            $parentButton.classList.add('btnPlay');
            $parentButton.setAttribute('title', 'Включить кассу');

            $parentButton.innerHTML = '';
            $parentButton.insertAdjacentHTML('afterbegin', playIcon);
        } */
    }


    document.addEventListener('DOMContentLoaded', () => {
        for (let i = 0; i < $questItem.length; i++) {
            const statusFiscal = $questItem[i].querySelector('p[data-js-id="status"]').textContent;
            const stateFiscal = $questItem[i].querySelector('p[data-js-id="state"]').textContent;
            const $statusFiscalImg = $questItem[i].querySelector('span[data-js-id="status-img"]');

            const wifiImg = (
                `<svg version="1.1" id="Layer_1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
           <g>
               <g>
                   <path d="M256.08,344.728c-26.688,0-48.4,21.433-48.4,47.776c0,26.343,21.712,47.776,48.4,47.776c26.689,0,48.4-21.433,48.4-47.776
                       C304.48,366.161,282.768,344.728,256.08,344.728z M256.08,408.28c-9.043,0-16.4-7.077-16.4-15.776
                       c0-8.699,7.357-15.776,16.4-15.776c9.043,0,16.4,7.077,16.4,15.776C272.48,401.203,265.123,408.28,256.08,408.28z"/>
               </g>
           </g>
           <g>
               <g>
                   <path d="M360.288,310.801c-26.097-30.143-64.138-47.431-104.369-47.431c-40.172,0-78.156,17.231-104.215,47.276
                       c-5.79,6.675-5.071,16.781,1.604,22.57c6.675,5.789,16.78,5.071,22.57-1.604c19.977-23.033,49.151-36.243,80.041-36.243
                       c30.939,0,60.162,13.259,80.176,36.376c3.165,3.654,7.622,5.527,12.104,5.527c3.711,0,7.44-1.285,10.465-3.902
                       C365.345,327.586,366.071,317.482,360.288,310.801z"/>
               </g>
           </g>
           <g>
               <g>
                   <path d="M432.025,248.425c-44.023-50.791-108.206-79.921-176.09-79.921c-67.776,0-131.89,29.061-175.904,79.731
                       c-5.795,6.671-5.085,16.776,1.587,22.571s16.777,5.085,22.572-1.587c37.932-43.67,93.242-68.716,151.745-68.716
                       c58.599,0,113.968,25.106,151.909,68.88c3.164,3.651,7.619,5.521,12.098,5.521c3.714,0,7.446-1.286,10.472-3.909
                       C437.091,265.207,437.812,255.102,432.025,248.425z"/>
               </g>
           </g>
           <g>
               <g>
                   <path d="M508.09,186.152C445.044,113.428,353.143,71.72,255.952,71.72c-97.121,0-188.984,41.659-252.035,114.295
                       c-5.792,6.673-5.078,16.779,1.595,22.571c6.672,5.791,16.778,5.077,22.571-1.595c56.969-65.631,140.024-103.272,227.869-103.272
                       c87.907,0,170.995,37.685,227.958,103.393c3.164,3.65,7.618,5.52,12.097,5.52c3.715,0,7.446-1.286,10.474-3.91
                       C513.157,202.934,513.878,192.829,508.09,186.152z"/>
               </g>
           </g>
           </svg>`);
                const noWifiImg = (
                    `<svg version="1.1" id="Capa_1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
           <g>
               <g>
                   <path d="M256,0C188.532,0,124.496,26.88,75.688,75.688C26.88,124.496,0,188.532,0,256c0,139.481,116.134,256,256,256
                       c139.481,0,256-116.134,256-256C512,116.519,395.866,0,256,0z M96.901,415.099C11.255,329.454,7.845,197.225,86.639,107.852
                       l26.815,26.815c-10.11,6.838-19.785,14.425-28.931,22.75c-6.126,5.576-6.573,15.063-0.998,21.19
                       c5.575,6.126,15.062,6.573,21.19,0.998c9.529-8.672,19.707-16.438,30.401-23.275l21.723,21.723
                       c-12.761,7.556-24.738,16.608-35.68,27.084c-5.984,5.729-6.19,15.225-0.461,21.208c5.729,5.984,15.225,6.19,21.208,0.46
                       c11.172-10.696,23.616-19.643,36.97-26.716l22.538,22.538c-16.302,7.228-31.205,17.655-43.631,30.838
                       c-5.683,6.028-5.402,15.521,0.626,21.204c6.028,5.683,15.522,5.402,21.204-0.626c12.613-13.381,28.006-22.984,44.938-28.279
                       l25.482,25.482c-22.939,1.796-43.455,14.16-56.006,32.543c-4.671,6.842-2.912,16.175,3.93,20.846
                       c6.847,4.674,16.178,2.907,20.846-3.93c7.022-10.286,18.045-17.272,30.243-19.169c24.864-3.87,41.106,13.323,46.499,15.221
                       L404.15,425.361C314.775,504.154,182.547,500.744,96.901,415.099z M425.361,404.149l-162.95-162.951
                       c26.722,1.591,51.372,13.106,69.977,32.844c5.687,6.034,15.181,6.304,21.204,0.626c6.028-5.682,6.309-15.175,0.626-21.204
                       C328.781,226.478,292.982,211,256,211c-7.39,0-14.732,0.628-21.954,1.833l-25.048-25.048C224.085,183.317,239.885,181,256,181
                       c42.726,0,83.245,16.267,114.094,45.804c5.984,5.73,15.479,5.522,21.208-0.46c5.729-5.984,5.523-15.479-0.461-21.208
                       C354.382,170.226,306.494,151,256,151c-24.488,0-48.358,4.535-70.613,13.174l-22.815-22.815C191.641,128.046,223.429,121,256,121
                       c56.032,0,109.759,20.813,151.285,58.604c6.127,5.576,15.613,5.129,21.19-0.998c5.576-6.127,5.129-15.614-0.998-21.19
                       C380.416,114.587,319.517,91,256,91c-40.686,0-80.291,9.693-115.88,27.907l-32.268-32.268C150.677,48.884,203.334,29.99,256,29.99
                       c57.246,0,114.492,22.304,159.099,66.911C500.745,182.547,504.154,314.775,425.361,404.149z"/>
               </g>
           </g>
           <g>
               <g>
                   <path d="M256,331c-24.813,0-45,20.187-45,45s20.187,45,45,45s45-20.187,45-45S280.813,331,256,331z M256,391
                       c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S264.271,391,256,391z"/>
               </g>
           </g>
           </svg>`);
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

            // if (statusFiscal === 'Давно не было связи') {
            //     $statusFiscalImg.firstChild.remove();
            //     $statusFiscalImg.insertAdjacentHTML('afterbegin', noWifiImg);
            // } else if (statusFiscal === 'ОК' || statusFiscal === 'Неизвестно') {
            //     $statusFiscalImg.firstChild.remove();
            //     $statusFiscalImg.insertAdjacentHTML('afterbegin', wifiImg);
            // } else if (stateFiscal === 'NOT_REGISTERED' || stateFiscal === 'NOT_FISCALIZED') {
            //     $statusFiscalImg.firstChild.remove();
            //     $statusFiscalImg.insertAdjacentHTML('afterbegin', warningIcon);
            // }


            switch (statusFiscal) {
                case 'Давно не было связи':
                    if (stateFiscal === 'READY' || stateFiscal === 'TURNED_OFF') {
                        $statusFiscalImg.firstChild.remove();
                        $statusFiscalImg.insertAdjacentHTML('afterbegin', noWifiImg);
                    }
                    break;
                case 'ОК':
                    if (stateFiscal === 'READY' || stateFiscal === 'TURNED_OFF') {
                        $statusFiscalImg.firstChild.remove();
                        $statusFiscalImg.insertAdjacentHTML('afterbegin', wifiImg);
                    }
                    break;
                case 'Неизвестно':
                    if (stateFiscal === 'READY' || stateFiscal === 'TURNED_OFF' || stateFiscal === 'TURNED_ON') {
                        $statusFiscalImg.firstChild.remove();
                        $statusFiscalImg.insertAdjacentHTML('afterbegin', wifiImg);
                    } else if (stateFiscal === 'NOT_REGISTERED' || stateFiscal === 'NOT_FISCALIZED') {
                        $statusFiscalImg.firstChild.remove();
                        $statusFiscalImg.insertAdjacentHTML('afterbegin', warningIcon);
                    }
                    break;
            }
        }

    });

    $companyBlock.addEventListener('click', (evt) => {
        window.modules.onClickAddConfirmInFiscal(evt);
        onClickBtnSetIcon(evt);
    });

