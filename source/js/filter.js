'use strict';

let $filterBtn = document.querySelector('.filterBtn');

if (!$filterBtn) {
    throw new Error("filter icon not found!");
}

$filterBtn.addEventListener("click", () => {
    let $formFilter = document.querySelector('.addCheckForm');
    if ($formFilter.classList.contains('visuallyHidden')) {
        $formFilter.classList.remove('visuallyHidden');
    } else {
        $formFilter.classList.add('visuallyHidden');
    }
});
