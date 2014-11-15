---
layout: default
permalink: /tv/index.php
---
<?php $f=json_decode(file_get_contents("http://noisebelt.com/television?type=soon")); ?>
<p>The following is a list of television shows I'm currently watching. Some of them might be embarassing.</p>

<ul class="no-bullet">
	<?php 
	foreach($f->data->soon as $k){ ?>
		<li class="tvshow" style="width: 50%; float: right">{% include tvepisode.html %} </li>
	<?php	} ?>
</ul>