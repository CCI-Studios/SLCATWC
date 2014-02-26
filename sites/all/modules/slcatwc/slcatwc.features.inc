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
 * Implements hook_fe_nodequeue_export_fields().
 */
function slcatwc_fe_nodequeue_export_fields() {
  $nodequeues = array();

  // Exported nodequeues: about_page
  $nodequeues['about_page'] = array(
    'name' => 'about_page',
    'title' => 'About Page',
    'subqueue_title' => '',
    'size' => 0,
    'link' => '',
    'link_remove' => '',
    'owner' => 'nodequeue',
    'show_in_ui' => 1,
    'show_in_tab' => 1,
    'show_in_links' => 0,
    'reference' => 0,
    'reverse' => 0,
    'i18n' => 0,
    'subqueues' => 1,
    'types' => array(
      0 => 'about_section',
    ),
    'roles' => array(),
    'count' => 0,
  );

  return $nodequeues;
}

/**
 * Implements hook_node_info().
 */
function slcatwc_node_info() {
  $items = array(
    'about_section' => array(
      'name' => t('About Section'),
      'base' => 'node_content',
      'description' => t('Section that appears on the About page.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
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
