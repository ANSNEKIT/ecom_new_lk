let toggleLeftMenu = document.querySelector(".menuGamburger").firstElementChild;

// let height_content = $('main').height();
// let height_menu = $('.menu').height();
//let height_menu = $('.menu');

function calcHeightMenu() {
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

toggleLeftMenu.addEventListener("click", () => {
    let leftMenu = $("aside.menu");
    leftMenu.toggleClass("menu--active");
});

window.onresize = function () {
    calcHeightMenu();
};

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
