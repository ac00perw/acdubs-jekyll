/*
* jQuery YouTube RSS Plugin 1.0
* 
* Copyright 2011 Jason Graves (GodLikeMouse)
* 
* Licensed under the Apache License, Version 2.0; you may not use this file except in compliance with the License.
* http://www.apache.org/licenses/LICENSE-2.0
* 
* Source: http://www.godlikemouse.com/code/jquery-ui-youtube-rss/
* Version: 1.0
* 
* Simple API for retrieving a user's uploaded videos through RSS
* 
* Examples
*   1) Populate an element with 5 of a user's uploaded videos
*
*      -- Example HTML --
*      <div id="myUserVideos" />
*
*      $(function(){
*          $("#myUserVideos").youtubeRss({username: "godlikemouse", limit: 5});
*      });
*      
*   2) Populate all elements of a specific class with the user's uploaded videos
*      by tag parameters.
*
*      -- Example HTML --
*      <div class="userVideos" youtube-username="godlikemouse" youtube-limit="5" />
*
*      $(function(){
*          $(".userVideos").youtubeRss();
*      });
*/



$.fn.youtubeRss = function(options){
    
    if(options){
        //options configured
        options.username = options.username ? options.username : null;
        if(!options.username) throw "jquery.ui.youtube.rss.js: username required.";
    
        options.template = options.template ? options.template : $.fn.youtubeRss.defaultTemplate;
        options.context = options.context ? options.context : this;
        options.offset = options.offset ? options.offset : 0;
        options.offset++;
        options.limit = options.limit ? options.limit : 25;
        options.orderby = options.orderby ? options.orderby : "updated";
        options.url = options.url ? options.url : "http://gdata.youtube.com/feeds/base/users/" + options.username + "/uploads";
//        http://gdata.youtube.com/feeds/base/users/acooperw/uploads?alt=rss&amp;v=2&amp;orderby=published&amp;client=ytapi-youtube-profile
        options.callback = options.callback ? options.callback : null;
    }
    else{
        options = {};
        //youtube-param configured
        options.username = $(this).attr("youtube-username") ? $(this).attr("youtube-username") : null;
        if(!options.username) throw "jquery.ui.youtube.rss.js: username required.";
    
       // options.offset = $(this).attr("youtube-offset") ? $(this).attr("youtube-offset") : 0;
       // options.offset++;
        //options.limit = $(this).attr("youtube-limit") ? $(this).attr("youtube-limit") : 25;
        options.orderby = $(this).attr("youtube-orderby") ? $(this).attr("youtube-orderby") : "published";
        options.url = $(this).attr("youtube-url") ? $(this).attr("youtube-url") : "http://gdata.youtube.com/feeds/base/users/" + options.username + "/uploads";
        options.client="ytapi-youtube-profile";
        options.callback = null;
    }//end if
    
    function applyTemplate(t, e, p){
        for(var i in e){
            var v = e[i];
            
            if(typeof(v) == "string"){
                var lookup = "{" + p + "." + i + "}";
                while(t.indexOf(lookup) >= 0)
                    t = t.replace(lookup, v);
            }//end if
            
            if(typeof(v) == "object"){
                t = applyTemplate(t, v, p + "." + i);
            }//end if
        }//end for
        
        return t;
    }//end applyTemplate()
    
    $.ajax({
        url: options.url,
        dataType: "jsonp",
        data: {
            orderby: options.orderby,
            alt: "json",
            v: 2,
        },
        success: function(data){
            if(options.callback) return options.callback(data);
            
            var output = '';
            
            if(data.feed){
                var len = data.feed.entry.length;
                for(var i=0; i<len; i++){
                    var entry = data.feed.entry[i];
                    
                    var t = options.template;
                    
                    t = applyTemplate(t, entry, 'entry');
                    
                    output += t;
                }//end for
                
                options.context.html(output);
            }//end if
        }//end success()
    });
}//end youtubeRss()

$.fn.youtubeRss.defaultTemplate = '<div class="jquery-ui-youtube-rss-entry">{entry.content.$t}</div>';