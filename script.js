$(document).ready(function() {
    $('#target-nav li a').click(function() {
        $(window).scrollTo($(this).attr('href'), 1500);
    });

    var designContainer = $('#design').position().top;
    var chocolateContainer = $('#chocolate').position().top;
    var aboutContainer = $('#about').position().top;
    $(window).scroll(function() {
        var windowOffset = $(window).scrollTop();
        if (windowOffset < designContainer) {
            $('#design-nav').removeClass('select');
            $('#chocolate-nav').removeClass('select');
            $('#about-nav').removeClass('select');
        }
        if (windowOffset >= designContainer && windowOffset < chocolateContainer) {
            $('#design-nav').addClass('select');
            $('#chocolate-nav').removeClass('select');
            $('#about-nav').removeClass('select');
        }
        if(windowOffset >= chocolateContainer && windowOffset < aboutContainer) {
            $('#design-nav').removeClass('select');
            $('#chocolate-nav').addClass('select');
            $('#about-nav').removeClass('select');
        }
        if (windowOffset >= aboutContainer - 30) {
            $('#design-nav').removeClass('select');
            $('#chocolate-nav').removeClass('select');
            $('#about-nav').addClass('select');
        }
    });
});
