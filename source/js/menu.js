let toggleLeftMenu = document.querySelector(".menuGamburger").firstElementChild;

// let scrollWidth = Math.max(
//     document.body.scrollWidth, document.documentElement.scrollWidth,
//     document.body.offsetWidth, document.documentElement.offsetWidth,
//     document.body.clientWidth, document.documentElement.clientWidth
// );

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

//let height_menu = $('.menu');

function calcHeightMenu(winHeight) {
    let height_body = $('body').height();
    let height_menu = $('.menu').height();
    let resultHeight = winHeight - 90;

    console.log("height_menu", height_menu);

    $('.menu').css({'height': resultHeight});

    console.log("height_menu", height_menu);
};

if (document.documentElement.clientWidth > 992) {
    calcHeightMenu(document.documentElement.clientHeight);
} else {
    $('.menu').css({'height': 'auto'});
}

toggleLeftMenu.addEventListener("click", () => {
    let leftMenu = $("aside.menu");
    leftMenu.toggleClass("menu--active");
});

window.onresize = function () {
    if ((document.documentElement.clientWidth > 992) && (document.documentElement.clientHeight < scrollHeight)) {
        calcHeightMenu(document.documentElement.clientHeight);
    } else if ((document.documentElement.clientWidth > 992) && (document.documentElement.clientHeight > scrollHeight)) {
        calcHeightMenu(document.documentElement.clientHeight);
    }else {
        $('.menu').css({'height': 'auto'});
    }
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
