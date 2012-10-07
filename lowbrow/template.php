<?php

function get_icon($node){
global $theme_path;



switch ($node->type){

	case 'feed_item':
		$out='<img src="/'.$theme_path.'/images/icon_twitter.png" />';
	break;
	case 'blog':
		
		foreach($node->taxonomy as $tx){
			$t[]=$tx->name;
		}

		if ($t[0]=='vlog'){
			$icon="icon_video.png";
		
		}elseif($t[0]=='Recipes'){
			$icon="icon_recipe.png";
		}else{
			$icon="icon_blog.png";
		}

		$out='<img src="/'.$theme_path.'/images/'.$icon.'" />';
		
		
		
	break;
	case 'mp3':
		$out='<img src="/'.$theme_path.'/images/icon_mp3.png" />';
	break;
	default:
		$out=$node->type;
	break;
	
}

return $out;
}

?>