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



$( document ).ready(function() {
	$('.links span').on('click', slideInNewDiv);
});