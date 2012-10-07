<?php
// $Id: page.tpl.php,v 1.28.2.1 2009/04/30 00:13:31 goba Exp $
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="<?php print $language->language ?>" xml:lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">

<head>
  <?php print $head ?>
  <title><?php print $head_title ?></title>
  <?php print $styles ?>
  <?php print $scripts ?>
  <script type="text/javascript"><?php /* Needed to avoid Flash of Unstyle Content in IE */ ?> </script>
<script type="text/javascript">


$(document).ready(function(){

<?php

$pages=array(
	"nblog"			=>'0px -252px',
	"nvideoblog" 	=>'0px -756px',
	"nmusic"		=>'0px -1514px',
	"nrecipes"		=>'0px -506px',
"nsports-television"=>'0px -0px',
	"nabout"		=>'0px -1010px',
	"ncontact"		=>'0px -1770px',
	"nhome"			=>'0px -1263px'
	);


$returnSpot=$pages['n'.drupal_get_path_alias($_REQUEST['q'])];//"0px -252px";

if (!$returnSpot){
	$returnSpot='0px -1263px';
}

foreach($pages as $page=>$pos){
	print 'attachNavEvents("'. $page .'","'.  $pos .'", "'. $returnSpot .'");';
}
print "$('#head').stop().animate({backgroundPosition: '". $returnSpot ."'});";


?>
});
</script>
<script type="text/javascript" src="/sites/all/themes/lowbrow/heads.js?7"></script>

</head>

<body>

<div id="page">
<div id="head"></div>
	<div id="nav">
		<div class="navlist leftnav">
			<div class="nhome"><a href="/">Home</a></div>
			<div class="nblog"><a href="/blog">Text</a></div>
			<div class="nvideoblog"><a href="/videoblog">Video</a></div>
			<div class="nmusic"><a href="/music">Music</a></div>
		</div>
	
		<div class="navlist rightnav">
			<div class="nrecipes"><a href="/recipes">Recipes</a></div>
			<div class="nsports-television"><a href="/sports-television">Sports</a></div>
			<div class="ncontact"><a href="/contact">Contact</a></div>
			<div class="nabout"><a href="/about-adam-cooper-wood">About</a></div>
			</div>
	</div>

	<div id="contentwrapper">
		<?php
			print $content;
		?>	
	</div>
	
</div>

<?php print $closure ?>
</body>
</html>
