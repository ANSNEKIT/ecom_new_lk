let $filerIcon = document.querySelector('.navAndFilter .iconFilter');

if (!$filerIcon) {
    throw new Error("filter icon not found!");
}

$filerIcon.addEventListener("click", (evt) => {
    let $formFilter = document.querySelector('.addCheckForm');
    console.log($formFilter.classList.contains('d-none'));
    if ($formFilter.classList.contains('d-none')) {
        $formFilter.classList.remove('d-none');
        console.log('remove d-none');
    } else {
        $formFilter.classList.add('d-none');
        console.log('add d-none');
    }
});

