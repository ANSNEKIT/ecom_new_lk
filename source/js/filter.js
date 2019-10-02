(function () {
    let $filterBtn = document.querySelector('.filterBtn');

    if (!$filterBtn) {
        throw new Error("filter icon not found!");
    }

    $filterBtn.addEventListener("click", (evt) => {
        let $formFilter = document.querySelector('.addCheckForm');
        if ($formFilter.classList.contains('d-none')) {
            $formFilter.classList.remove('d-none');
        } else {
            $formFilter.classList.add('d-none');
        }
    });

})();


