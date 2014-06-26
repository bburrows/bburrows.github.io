$(document).ready(function() {

	$('#fullpage').fullpage({
		anchors: ['home', 'design', 'chocolate', 'about'],
        autoScrolling: true,
        scrollingSpeed: 500,
	});



	$(window).scroll(function () {
		console.log($(this).scrollTop());
        if ($(this).scrollTop() < 20) {
            $('.navbar').removeClass('solidNav');
        } else {
            $('.navbar').addClass('solidNav');
        }
    });


});