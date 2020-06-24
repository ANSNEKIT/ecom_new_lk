const createLinkOfd = () => {
    const $linkToOfd = document.querySelector('a[data-js-id="linkToOfd"]');
    const ofdName = document.querySelector('.js-ofd-name p').textContent.trim();
    const DATE = document.querySelector('.js-date').textContent.trim();
    const DATE_FOR_SBIS = dateRefactor(DATE);
    const INN = document.querySelector('span[data-class="inn"]').textContent.trim();
    const RNM = document.querySelector('span[data-class="rnm"]').textContent.trim();
    const FN = document.querySelector('span[data-class="fn"]').textContent.trim();
    const FD = document.querySelector('span[data-class="fd"]').textContent.trim();
    const FP = document.querySelector('span[data-class="fp"]').textContent.trim(); 

    let resultLink = '#';

    function dateRefactor(date) {
        const newDate = new Date(date);
        const day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
        const month = newDate.getMonth() < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
        const year = `${newDate.getFullYear()}`;
        const yearShort = year.slice(2);
        const dateForSbis = `${day}${month}${yearShort}`;

        return dateForSbis;
    }

    switch (ofdName) {
        case 'ООО "ПЕТЕР-СЕРВИС Спецтехнологии"':
            resultLink = `https://check.ofd.ru/rec/${INN}/${RNM}/${FN}/${FD}/${FP}`;
        
            $linkToOfd.setAttribute('href', resultLink);
            break;
        case 'ООО "Компания Тензор"':
            resultLink = `https://ofd.sbis.ru/rec/${RNM}/${DATE_FOR_SBIS}/${FP}`;
            $linkToOfd.setAttribute('href', resultLink);
            break;
        case 'Платформа ОФД':
            resultLink = `https://lk.platformaofd.ru/web/noauth/cheque?fn=${FN}&fp=${FP}&i=${FD}`;
            $linkToOfd.setAttribute('href', resultLink);
            break;
        case 'ООО "Яндекс ОФД"':
            resultLink = `https://ofd.yandex.ru/vaucher/${RNM}/${FD}/${FP}`;
            $linkToOfd.setAttribute('href', resultLink);
            break;
        default:
            $linkToOfd.setAttribute('href', '#');
            break;
    }
};

document.addEventListener('DOMContentLoaded', createLinkOfd);



