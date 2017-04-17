$(document).ready(function(){


	var link = $("#accordion a");
	link.on('click', function(e) {

	    e.preventDefault();

	    var a = $(this).attr("href");

	    $(a).slideDown('fast');

	    //$(a).slideToggle('fast');
	    $("#accordion div").not(a).slideUp('fast');

	});

	$('#Carousel').carousel({
	  interval: 4000
	})

});
