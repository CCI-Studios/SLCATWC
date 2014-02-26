<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): 
	if ($id % 4 == 0)
		$classes_array[$id] .= ' color0';
	if ($id % 4 == 1)
		$classes_array[$id] .= ' color1';
	if ($id % 4 == 2)
		$classes_array[$id] .= ' color2';
	if ($id % 4 == 3)
		$classes_array[$id] .= ' color3';

?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
  	<div class="content"><div><div>
    	<?php print $row; ?>
    </div></div></div>
  </div>
<?php endforeach; ?>
