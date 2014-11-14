---
layout: empty
permalink: /television/index.php
---
<?php $f=json_decode(file_get_contents("http://noisebelt.com/television?type=soon")); ?>


<?php foreach($f->data->soon as $k){ ?>
	{% include tvepisode.html %}
<?php } ?>