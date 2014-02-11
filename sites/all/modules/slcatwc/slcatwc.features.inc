<?php
/**
 * @file
 * slcatwc.features.inc
 */

/**
 * Implements hook_views_api().
 */
function slcatwc_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function slcatwc_node_info() {
  $items = array(
    'article' => array(
      'name' => t('News Article'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
