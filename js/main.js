function slideInNewDiv(){
	var id = $(this).attr('id');
	var elementToTarget = id + "-link";
	// $('#'+elementToTarget).toggle("slideleft", function(){
	// 	$('.main-display').toggle('slideleft');
	// });
	$('.main-display').toggle('slideleft', function(){
		$('#'+elementToTarget).toggle("slide")
	});
};


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
	$('.links span').on('click', slideInNewDiv);
  	$('.slider').slick();
});


$('.card[data-toggle="modal"]').on('click', slickReInit);