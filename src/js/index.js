$(document).ready(function () {
    if ($('.counter').length > 0) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    if ($('.grid').length > 0) {

        var $container = $(".grid");
      
        $container.masonry({
          columnWidth: ".grid-item",
          itemSelector: ".grid-item",
          isFitWidth: true,
          gutter: 20
        });
      
      
    }
});

$(window).scroll(function () {
    $('header').toggleClass('shrink', $(this).scrollTop() > 80);
});

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        button.toggleClass('burger-menu_button_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');