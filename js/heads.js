

function attachNavEvents(myClass, position) {
var returnSpot='0 -1263px';

	//get current url to fix position of head
	var url=window.location.pathname.split("/");
	console.log(url[1]);
	var current="n"+url[1];
	
	if(current == myClass){
		returnSpot=position;
	}
	

    $(".navlist ." + myClass).mouseover(function() {
	console.log(myClass+" "+position);

	$('#head').css({'background-position': position});

	
	}).mouseout(function() {


		$('#head').stop().css({'background-position': returnSpot});
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
	

function linkify(inputText, options) {
    
  this.options = {linkClass: 'url', targetBlank: true};

  this.options = $.extend(this.options, options);
  
  inputText = inputText.replace(/\u200B/g, "");

  //URLs starting with http://, https://, or ftp://
  var replacePattern1 = /(src="|href="|">|\s>)?(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;ï]*[-A-Z0-9+&@#\/%=~_|ï]/gim;
  var replacedText = inputText.replace(replacePattern1, function($0,$1){ return $1?$0:'<a class="'+ this.options.linkClass + '" href="' + $0 + '"' + (this.options.targetBlank?'target="_blank"':'') + '>'+ $0+ '</a>';});

  //URLS starting with www and not the above
  var replacePattern2 = /(src="|href="|">|\s>|https?:\/\/|ftp:\/\/)?www\.[-A-Z0-9+&@#\/%?=~_|!:,.;ï]*[-A-Z0-9+&@#\/%=~_|ï]/gim;
  var replacedText = replacedText.replace(replacePattern2, function($0,$1){ return $1?$0:'<a class="'+ this.options.linkClass + '" href="http://' + $0 + '"' + (this.options.targetBlank?'target="_blank"':'') + '>'+ $0+ '</a>';});

  //Change email addresses to mailto:: links
  var replacePattern3 = /([\.\w]+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
  var replacedText = replacedText.replace(replacePattern3, '<a class="' + this.options.linkClass + '" href="mailto:$1">$1</a>');

  return replacedText;
}

$.fn.doLinks = function(){
  this.each(function(){
    $(this).html(linkify($(this).html()));
  });
}

});



