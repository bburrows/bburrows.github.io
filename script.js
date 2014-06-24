$(document).ready(function() {

	$('#fullpage').fullpage({
		anchors: ['home', 'design', 'chocolate', 'about'],
	});



    // Default is 700ms; changed to 500ms (fullPage.js)
    $.fn.fullpage.setScrollingSpeed(500);




	$(window).scroll(function () {
		console.log($(this).scrollTop());
        if ($(this).scrollTop() < 20) {
            $('.navbar').removeClass('solidNav');
        } else {
            $('.navbar').addClass('solidNav');
        }
    });


});