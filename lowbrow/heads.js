

function attachNavEvents(myClass, position, rs) {



    $(".navlist ." + myClass).mouseover(function() {


	$('#head').stop().animate({backgroundPosition: position});

	
	}).mouseout(function() {


		$('#head').stop().animate({backgroundPosition: rs});
	});

}
