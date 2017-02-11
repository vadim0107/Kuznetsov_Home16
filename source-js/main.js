$(document).ready(function () {
    // Scroll-----------------------------------------------
    $('ul.menu-list').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body').animate({scrollTop: top}, 1500);
    });

// Hamburger-menu---------------------------------------------
    $('button.show-menu').on('click', function () {
        $('ul.menu-list').slideToggle('slow', function () {
            $(this).addClass('active');
        });
    });

// Accordion------------------------------------------------------
    $('h2').on('click', function () {
        if ($(this).next('div').is(':visible')) {
            $(this).next('div').slideUp('slow');
        } else {
            $('.accordion-text').slideUp("slow");
            $(this).next('div').slideToggle('slow');
        }
    });

// Tabs-----------------------------------------------------------
    $('.tabs-container div').hide().filter(':first').show();
    $('ul.tab-list li a').on('click', function (event) {
        event.preventDefault();
        $('.tabs-container div').hide();
        $('.tabs-container div').filter(this.hash).show();
        $('ul.tab-list li a').removeClass('active');
        $(this).addClass('active');
    });

// Modal-window-------------------------------------------------------
    $('button.show-modal').on('click', function () {
        $('.overlay').fadeIn(400);
        $('.modal-window').css('display', 'block');
        $('.modal-window').animate({opacity: 1}, 400);
    });

    $('.modal-close, .overlay').on('click', function () {
        $('.modal-window').animate({opacity: 0}, 400);
        $('.modal-window').css('display', 'none');
        $('.overlay').fadeOut(400);
    });
})


