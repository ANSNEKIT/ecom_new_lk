'use strict';

    const $toggleLeftMenu = document.querySelector(".navbar-toggler");

    $toggleLeftMenu.addEventListener("click", () => {
        const $leftMenu = document.querySelector("#menu");
        const $gridContainer = document.getElementById("#gridWrapper");
        const $span = $toggleLeftMenu.querySelector('.navbar-toggler-icon');

        if ($span.classList.contains('active')) {
            $span.classList.remove('active');
        } else {
            $span.classList.add('active');
        }

        if ($leftMenu.classList.contains("menu--active")) {
            $leftMenu.classList.remove("menu--active");
            $leftMenu.classList.add("visuallyHidden");

            $gridContainer.classList.add("gridContainerHideMenu");
            $gridContainer.classList.remove("gridContainer");

        } else if ($leftMenu.classList.contains("menu--active") === false) {
            $leftMenu.classList.add("menu--active");
            $leftMenu.classList.remove("visuallyHidden");

            $gridContainer.classList.add("gridContainer");
            $gridContainer.classList.remove("gridContainerHideMenu");
        }

    });



    // Click Element Action
    jQuery('.scroll-to-top.visible').on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 400);
    });

    /*
    document.addEventListener("click", (evt) => {
        const icon = evt.target;
        const menuTop = $(".userMenu .dropdown-menu");
        console.log(icon.find(".arrow .js-icon")); //.toggleClass("fa-chevron-down fa-chevron-up");

        const boolShow = menuTop.hasClass("show");
        console.log(boolShow);
        if(boolShow === true) {
            //console.log(menuTop.hasClass("show"));
            icon.toggleClass("fa-chevron-up");
        }
    });

    */



