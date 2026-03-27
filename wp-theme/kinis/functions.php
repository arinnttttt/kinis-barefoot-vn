<?php
/**
 * Kinis Theme Functions
 */

// Enqueue styles and scripts
function kinis_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style('kinis-fonts', 'https://fonts.googleapis.com/css2?family=Phudu:wght@300;400;500;600;700;800;900&family=Manrope:wght@200..800&display=swap', array(), null);
    
    // Main CSS (from Vite build)
    wp_enqueue_style('kinis-main', get_template_directory_uri() . '/assets/css/index-D7zrSkuL.css', array(), '1.0.0');
    
    // Theme stylesheet
    wp_enqueue_style('kinis-theme', get_stylesheet_uri(), array(), '1.0.0');
    
    // Header scroll behavior (vanilla JS - replaces React scroll handler)
    wp_enqueue_script('kinis-header-scroll', get_template_directory_uri() . '/assets/js/header-scroll.js', array(), '1.0.0', true);
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

// ACF Notice
function kinis_acf_notice() {
    if (!function_exists('acf_add_local_field_group') && current_user_can('manage_options')) {
        echo '<div class="notice notice-warning"><p><strong>Kinis Theme:</strong> Cài plugin <a href="' . admin_url('plugin-install.php?s=Advanced+Custom+Fields&tab=search') . '">Advanced Custom Fields</a> (miễn phí) để chỉnh sửa nội dung trang trực tiếp từ WordPress admin.</p></div>';
    }
}
add_action('admin_notices', 'kinis_acf_notice');

// Load ACF field definitions
require_once get_template_directory() . '/inc/acf-fields.php';

// Helper: get ACF field with fallback
function kinis_field($field_name, $default = '', $post_id = false) {
    if (!function_exists('get_field')) return $default;
    $value = get_field($field_name, $post_id);
    return ($value !== null && $value !== '' && $value !== false) ? $value : $default;
}

// Helper: replace text in content with ACF value
function kinis_replace_content($content, $replacements) {
    foreach ($replacements as $default => $field_name) {
        $new_value = kinis_field($field_name, $default);
        if ($new_value !== $default) {
            $content = str_replace($default, esc_html($new_value), $content);
        }
    }
    return $content;
}

// Custom Walker for desktop nav
class Kinis_Nav_Walker extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '<div class="header-dropdown-panel pointer-events-none invisible absolute left-0 top-full mt-2 w-64 translate-y-2 overflow-hidden rounded-xl opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100" role="menu">';
    }
    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '</div></div>';
    }
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $is_active = in_array('current-menu-item', $classes) || in_array('current-menu-ancestor', $classes);
        $has_children = in_array('menu-item-has-children', $classes);
        
        if ($depth === 0 && $has_children) {
            $active_class = $is_active ? ' text-secondary' : '';
            $output .= '<div class="group relative z-50" data-component="dropdown" data-dropdown-trigger="hover">';
            $output .= '<button type="button" class="header-nav-link header-submenu-trigger flex items-center gap-1 px-4 py-2 text-sm lg:text-base font-medium' . $active_class . '" aria-haspopup="true" data-dropdown-button>';
            $output .= esc_html($item->title);
            $output .= '<svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
            $output .= '</button>';
        } elseif ($depth === 0) {
            $active_class = $is_active ? ' text-secondary' : '';
            $output .= '<a href="' . esc_url($item->url) . '" class="header-nav-link px-4 py-2 text-sm lg:text-base font-medium' . $active_class . '">';
            $output .= esc_html($item->title);
            $output .= '</a>';
        } else {
            $active_attr = $is_active ? 'true' : 'false';
            $output .= '<a href="' . esc_url($item->url) . '" class="header-dropdown-link block px-4 py-3 text-sm lg:text-base" data-active="' . $active_attr . '" role="menuitem">';
            $output .= esc_html($item->title);
            $output .= '</a>';
        }
    }
    function end_el(&$output, $item, $depth = 0, $args = null) {
        // Parent wrapper div is closed in end_lvl
    }
}

// Custom Walker for mobile nav
class Kinis_Mobile_Nav_Walker extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '<div class="pl-4 pb-2 space-y-0.5">';
    }
    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '</div></details>';
    }
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $is_active = in_array('current-menu-item', $classes) || in_array('current-menu-ancestor', $classes);
        $has_children = in_array('menu-item-has-children', $classes);
        $color = $is_active ? 'hsl(27,100%,52%)' : ($depth === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.5)');
        
        if ($depth === 0 && $has_children) {
            $output .= '<details class="group">';
            $output .= '<summary class="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-base font-medium transition-colors rounded-xl [&::-webkit-details-marker]:hidden" style="color: ' . $color . ';">';
            $output .= esc_html($item->title);
            $output .= '<svg class="w-5 h-5 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
            $output .= '</summary>';
        } elseif ($depth === 0) {
            $output .= '<a href="' . esc_url($item->url) . '" class="kinis-mobile-link block px-4 py-3.5 text-base font-medium rounded-xl transition-colors" style="color: ' . $color . ';">';
            $output .= esc_html($item->title);
            $output .= '</a>';
        } else {
            $output .= '<a href="' . esc_url($item->url) . '" class="kinis-mobile-link block px-4 py-3 text-base transition-colors rounded-xl" style="color: ' . $color . ';">';
            $output .= esc_html($item->title);
            $output .= '</a>';
        }
    }
    function end_el(&$output, $item, $depth = 0, $args = null) {
        // details is closed in end_lvl for parents
    }
}

// Auto-create default menu on theme activation
function kinis_create_default_menu() {
    if (!has_nav_menu('primary')) {
        $menu_name = 'Kinis Primary';
        $menu_exists = wp_get_nav_menu_object($menu_name);
        if (!$menu_exists) {
            $menu_id = wp_create_nav_menu($menu_name);
            if (!is_wp_error($menu_id)) {
                // Add menu items
                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' => 'Trang chủ', 'menu-item-url' => home_url('/'),
                    'menu-item-status' => 'publish', 'menu-item-type' => 'custom',
                ));
                
                $story_page = get_page_by_path('cau-chuyen');
                if ($story_page) {
                    wp_update_nav_menu_item($menu_id, 0, array(
                        'menu-item-title' => 'Câu chuyện', 'menu-item-object' => 'page',
                        'menu-item-object-id' => $story_page->ID, 'menu-item-type' => 'post_type',
                        'menu-item-status' => 'publish',
                    ));
                }
                
                // Products parent
                $products_id = wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' => 'Sản phẩm', 'menu-item-url' => '#',
                    'menu-item-status' => 'publish', 'menu-item-type' => 'custom',
                ));
                $lucy_page = get_page_by_path('san-pham-lucy');
                $nomad_page = get_page_by_path('san-pham-nomad');
                if ($lucy_page) {
                    wp_update_nav_menu_item($menu_id, 0, array(
                        'menu-item-title' => 'Kinis Lucy', 'menu-item-object' => 'page',
                        'menu-item-object-id' => $lucy_page->ID, 'menu-item-type' => 'post_type',
                        'menu-item-status' => 'publish', 'menu-item-parent-id' => $products_id,
                    ));
                }
                if ($nomad_page) {
                    wp_update_nav_menu_item($menu_id, 0, array(
                        'menu-item-title' => 'Kinis Nomad', 'menu-item-object' => 'page',
                        'menu-item-object-id' => $nomad_page->ID, 'menu-item-type' => 'post_type',
                        'menu-item-status' => 'publish', 'menu-item-parent-id' => $products_id,
                    ));
                }
                
                $science_page = get_page_by_path('khoa-hoc');
                if ($science_page) {
                    wp_update_nav_menu_item($menu_id, 0, array(
                        'menu-item-title' => 'Khoa học', 'menu-item-object' => 'page',
                        'menu-item-object-id' => $science_page->ID, 'menu-item-type' => 'post_type',
                        'menu-item-status' => 'publish',
                    ));
                }
                
                // Target audience parent
                $audience_id = wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' => 'Đối tượng phù hợp', 'menu-item-url' => '#',
                    'menu-item-status' => 'publish', 'menu-item-type' => 'custom',
                ));
                $gym_page = get_page_by_path('doi-tuong-gym');
                $run_page = get_page_by_path('doi-tuong-chay-bo');
                $flat_page = get_page_by_path('doi-tuong-ban-chan-bet');
                if ($gym_page) {
                    wp_update_nav_menu_item($menu_id, 0, array(
                        'menu-item-title' => 'Gym & Fitness', 'menu-item-object' => 'page',
                        'menu-item-object-id' => $gym_page->ID, 'menu-item-type' => 'post_type',
                        'menu-item-status' => 'publish', 'menu-item-parent-id' => $audience_id,
                    ));
                }
                if ($run_page) {
                    wp_update_nav_menu_item($menu_id, 0, array(
                        'menu-item-title' => 'Chạy bộ', 'menu-item-object' => 'page',
                        'menu-item-object-id' => $run_page->ID, 'menu-item-type' => 'post_type',
                        'menu-item-status' => 'publish', 'menu-item-parent-id' => $audience_id,
                    ));
                }
                if ($flat_page) {
                    wp_update_nav_menu_item($menu_id, 0, array(
                        'menu-item-title' => 'Bàn chân bẹt', 'menu-item-object' => 'page',
                        'menu-item-object-id' => $flat_page->ID, 'menu-item-type' => 'post_type',
                        'menu-item-status' => 'publish', 'menu-item-parent-id' => $audience_id,
                    ));
                }
                
                $faq_page = get_page_by_path('faq');
                if ($faq_page) {
                    wp_update_nav_menu_item($menu_id, 0, array(
                        'menu-item-title' => 'FAQ', 'menu-item-object' => 'page',
                        'menu-item-object-id' => $faq_page->ID, 'menu-item-type' => 'post_type',
                        'menu-item-status' => 'publish',
                    ));
                }
                
                // Assign menu to location
                $locations = get_theme_mod('nav_menu_locations', array());
                $locations['primary'] = $menu_id;
                set_theme_mod('nav_menu_locations', $locations);
            }
        }
    }
}
add_action('after_switch_theme', 'kinis_create_default_menu', 20);
