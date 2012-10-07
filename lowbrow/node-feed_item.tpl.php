<?php
// $Id: node.tpl.php,v 1.7 2007/08/07 08:39:36 goba Exp $

?>
  <div class="node">

	<div class="type">
	<?php if (!$is_front){
	  print format_date($node->created, 'large')."&nbsp;";
	}
	print get_icon($node); ?></div>
	
    <?php if ($page == 0) { ?><h3 class="title"><a href="http://www.twitter.com/ac00perw"><?php print "Tweet ";?></a></h3><?php }else{
    print "<h1>Tweet</h1>";
    }; ?>
    
    <div class="content"><?php print $content?></div>
    

  <div style="display: block; clear: both; visibility: hidden;"></div>
  </div>
