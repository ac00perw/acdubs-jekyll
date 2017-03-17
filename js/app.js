(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-850650-2', 'auto');
  ga('send', 'pageview');

    $(document).ready(function(){
        var id=$('body').attr('id');
        if (id == "home") {
        var d=new Date();
        $('#scene').css('background', "url(/images/headers/"+ d.getDate() + ".jpg) bottom center no-repeat");
        }else{
        
        var header = headers[Math.round(Math.random() * ( (headers.length -1) - 0) + 0)];
        $('#scene').css('background', "url(/"+header.slice(0)+") center center no-repeat");
        }

        $('#scene').css('background-size', "cover");
        
        $('.top-bar ul li:not(.active) a').hover(function(){
            $(this).addClass('animated pulse');
        }, function(){ 
            $(this).removeClass('animated pulse');
        });
        
        
        $('#resume .item img, #resume .item a').hover(function(){
            var $this = $(this).parent().find('.thm');
            $($this).addClass('pulse');
        }, function(){ 
            var $this = $(this).parent().find('.thm');
            $($this).removeClass('pulse');
            
        });
        
        if (id == "services" || id == "home"){
            $('.sitethumb').hover(function(){
                $(this).addClass('animated site-hover').find('.nameplate').fadeIn(250);

            }, function(){ 
                $(this).removeClass('animated site-hover');
                $(this).find('.nameplate').fadeOut(250); 
            });
        }
        
    })
   