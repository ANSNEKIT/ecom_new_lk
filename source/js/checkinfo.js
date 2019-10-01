let createLinkOfd = () => {
    const $linkToOfd = document.querySelector('a[data-js-id="linkToOfd"]');
    const INN = document.querySelector('span[data-class="inn"]').textContent.trim();
    const RNM = document.querySelector('span[data-class="rnm"]').textContent.trim();
    const FN = document.querySelector('span[data-class="fn"]').textContent.trim();
    const FD = document.querySelector('span[data-class="fd"]').textContent.trim();
    const FP = document.querySelector('span[data-class="fp"]').textContent.trim();
    const resultLink = `https://check.ofd.ru/rec/${INN}/${RNM}/${FN}/${FD}/${FP}`;

    $linkToOfd.setAttribute('href', resultLink);
};

document.addEventListener('DOMContentLoaded', createLinkOfd);



