<?php
/**
 * Kinis Theme Functions
 */

// Enqueue styles and scripts
function kinis_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style('kinis-fonts', 'https://fonts.googleapis.com/css2?family=Phudu:wght@300;400;500;600;700;800;900&family=Manrope:wght@200..800&display=swap', array(), null);
    
    // Main CSS (from Vite build)
    wp_enqueue_style('kinis-main', get_template_directory_uri() . '/assets/css/index-CyTAWf-6.css', array(), '1.0.0');
    
    // Theme stylesheet
    wp_enqueue_style('kinis-theme', get_stylesheet_uri(), array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'kinis_enqueue_assets');

// Theme support
function kinis_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register navigation menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'kinis'),
        'footer'  => __('Footer Menu', 'kinis'),
    ));
}
add_action('after_setup_theme', 'kinis_theme_setup');

// Auto-create pages on theme activation
function kinis_create_pages() {
    $pages = array(
        array('title' => 'Câu chuyện', 'slug' => 'cau-chuyen', 'template' => 'page-cau-chuyen.php'),
        array('title' => 'Kinis Lucy', 'slug' => 'san-pham-lucy', 'template' => 'page-san-pham-lucy.php'),
        array('title' => 'Kinis Nomad', 'slug' => 'san-pham-nomad', 'template' => 'page-san-pham-nomad.php'),
        array('title' => 'Khoa học', 'slug' => 'khoa-hoc', 'template' => 'page-khoa-hoc.php'),
        array('title' => 'Gym & Fitness', 'slug' => 'doi-tuong-gym', 'template' => 'page-doi-tuong-gym.php'),
        array('title' => 'Chạy bộ', 'slug' => 'doi-tuong-chay-bo', 'template' => 'page-doi-tuong-chay-bo.php'),
        array('title' => 'Bàn chân bẹt', 'slug' => 'doi-tuong-ban-chan-bet', 'template' => 'page-doi-tuong-ban-chan-bet.php'),
        array('title' => 'FAQ', 'slug' => 'faq', 'template' => 'page-faq.php'),
    );
    
    foreach ($pages as $p) {
        $existing = get_page_by_path($p['slug']);
        if (!$existing) {
            $page_id = wp_insert_post(array(
                'post_title'   => $p['title'],
                'post_name'    => $p['slug'],
                'post_status'  => 'publish',
                'post_type'    => 'page',
                'post_content' => '',
            ));
            if ($page_id && !is_wp_error($page_id)) {
                update_post_meta($page_id, '_wp_page_template', $p['template']);
            }
        }
    }
}
add_action('after_switch_theme', 'kinis_create_pages');

// Disable admin bar on frontend
add_filter('show_admin_bar', '__return_false');
