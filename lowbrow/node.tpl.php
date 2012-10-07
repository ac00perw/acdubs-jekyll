<?php
// $Id: node.tpl.php,v 1.7 2007/08/07 08:39:36 goba Exp $

?>
  <div class="node">

	<div class="type">
	<?php if (!$is_front){
	  print format_date($node->created, 'large')."&nbsp;";
	}
	print get_icon($node); ?></div>
	
    <?php if ($page == 0) { ?><h3 class="title"><a href="<?php print $node_url?>"><?php print $title?></a></h3><?php }else{
    print "<h1>".$title."</h1>";
    }; ?>
    
    <div class="content"><?php print $content?></div>

  <div class="read-more">
  <?php
if ( $teaser ){
	print "<a href=".$node_url.">[READ MORE]</a>";
}
  ?>
  </div>
<?php if($page){ ?>  
<a href="/comment/reply/<?php print $node->nid; ?>#comment-form">Add your comment</a>
<?php } ?>
  <div style="display: block; clear: both; visibility: hidden;"></div>
  </div>
  <?php
  if ($is_admin){
  	print $links;
  
  }
  ?>

  

