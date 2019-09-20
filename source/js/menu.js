let toggleLeftMenu = document.querySelector(".menuGamburger").firstElementChild;
let $aside = document.querySelector("#menu");


// let height_content = $('main').height();
// let height_menu = $('.menu').height();
//let height_menu = $('.menu');

/*function calcHeightMenu() {
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
    let height_content = $('main').height();
    let height_menu = $('.menu').height();
    let resultHeight = scrollHeight - 90;

    if ((document.documentElement.clientWidth > 992) && (height_content < document.documentElement.clientHeight)) {
        $('.menu').css({'height': resultHeight});
        resultHeight = "auto";
    } else if (document.documentElement.clientWidth < 992) {
        $('.menu').css({'height': 'auto'});
    }
}

calcHeightMenu();

window.onresize = function () {
    calcHeightMenu();
};*/

toggleLeftMenu.addEventListener("click", () => {
    let $leftMenu = document.querySelector("#menu");
    let $gridContainer = document.querySelector(".gridContainer");

    //console.log($leftMenu.classList.contains("menu--active"));

    if ($leftMenu.classList.contains("menu--active")) {
        $leftMenu.classList.remove("menu--active");
        $gridContainer.classList.add("gridContainerHideMenu");
    } else {
        $leftMenu.classList.add("menu--active");
        $gridContainer.classList.remove("gridContainerHideMenu");
    }

});



// Click Element Action
jQuery('.scroll-to-top.visible').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 400);
    return false;
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
