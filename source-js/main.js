$('button.show-menu').on('click', function () {
    $('ul.menu-list').toggleClass('active');
});


$("h2").on('click', function() {
    if($(this).next('div').is(':visible')){
        $(this).next('div').slideUp('slow');
    } else {
        $('.accordion-text').slideUp("slow");
        $(this).next('div').slideToggle('slow');
    }
});