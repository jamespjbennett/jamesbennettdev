function slickReInit() {
	$('.slider').hide();
    setTimeout(function(){
		console.log('slick redinit');
		$('.slider').slick('unslick');
		$('.slider').slick();
		$('.slider').fadeIn();
    }, 500);
}

$( document ).ready(function() {
  $('.slider').slick();
	$('.dropdown-blurb').on('click', function(){
		var element = $(this).next('.content');
		$(element).toggle('slide');
	});
});

$('.card[data-toggle="modal"]').on('click', slickReInit);
