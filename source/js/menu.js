let toggleLeftMenu = document.querySelector(".menuGamburger").firstElementChild;

toggleLeftMenu.addEventListener("click", () => {
    let leftMenu = $("aside.menu");
    leftMenu.toggleClass("menu--active");
});

/*
document.addEventListener("click", (evt) => {
    let icon = evt.target;
    let menuTop = $(".userMenu .dropdown-menu");
    console.log(icon.find(".arrow .js-icon")); //.toggleClass("fa-chevron-down fa-chevron-up");

    let boolShow = menuTop.hasClass("show");
    console.log(boolShow);
    if(boolShow === true) {
        //console.log(menuTop.hasClass("show"));
        icon.toggleClass("fa-chevron-up");
    }
});

*/


// Click Element Action
jQuery('.scroll-to-top.visible').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 400);
    return false;
});