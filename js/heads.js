

function attachNavEvents(myClass, position) {
var returnSpot='0 -1263px';


    $(".navlist ." + myClass).mouseover(function() {
	console.log(myClass+" "+position);

	$('#head').css({'background-position': position});

	
	}).mouseout(function() {


		$('#head').stop().css({'background-position': '0px -1263px'});
	});

}

$(document).ready(function(){
	attachNavEvents("nblog",'0px -252px');
	attachNavEvents(	"nvideoblog" 	,'0px -756px');
	attachNavEvents(	"nmusic"		,'0px -1514px');
	attachNavEvents(	"nrecipes"		,'0px -506px');
	attachNavEvents("nsports-television",'0px 0px');
	attachNavEvents(	"nabout"		,'0px -1010px');
	attachNavEvents(	"ncontact"		,'0px -1770px');
	attachNavEvents(	"nhome"			,'0px -1263px');
	$('#head').stop().animate({backgroundPosition: '0px -1263px'});
});


