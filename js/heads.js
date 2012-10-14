
function attachNavEvents(links, returnSpot) {

	$.each(links, function(index, value){
	  var thisClass="."+ value.link.toString();
	  var pos=value.pos;
	  
    $(thisClass).mouseover(function() {
		$('#head').hide().dequeue().css({'background-position': pos}).fadeIn(200);

	}).mouseout(function() {
		bp=returnSpot.split(" ");
		$('#head').hide().dequeue().css({'background-position': returnSpot, "opacity": 1}).fadeIn(200);
	});
	
	});

}


$(document).ready(function(){

var links={'blog': {"link":"nblog", "pos":'0px -252px'}, 'video': {"link":'nvideo',"pos":'0px -756px'},
    'music': {"link":'nmusic',"pos":'0px -1514px'},
    'recipes': {"link":"nrecipes", "pos":'0px -506px'},
    "tvsports": {"link":"ntvsports","pos":'0px 0px'},
    'about': {"link":"nabout", "pos":'0px -1010px'},
	"contact": {"link":"ncontact","pos":'0px -1770px'},  
	"home": {"link":"nhome","pos":  '0px -1263px'}};
	
	var url=window.location.pathname.split("/");
	var current=url[1];
	if(current==''){
		current='home';
	}
	
	var returnSpot=eval("links."+current+".pos")

	attachNavEvents(links, returnSpot);

	$('#head').stop().css({backgroundPosition: returnSpot});
	

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



