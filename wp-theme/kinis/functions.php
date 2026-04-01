<?php
/**
 * Kinis Theme Functions
 */

// Enqueue styles and scripts
function kinis_enqueue_assets() {
    // Google Fonts - swap display for faster rendering
    wp_enqueue_style('kinis-fonts', 'https://fonts.googleapis.com/css2?family=Phudu:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap', array(), null);
    
    // Main CSS (from Vite build)
    wp_enqueue_style('kinis-main', get_template_directory_uri() . '/assets/css/index-DDq6IvMv.css', array(), '3.0.2');
    
    // Theme stylesheet
    wp_enqueue_style('kinis-theme', get_stylesheet_uri(), array(), '3.0.2');
    
    // Header scroll behavior (vanilla JS - replaces React scroll handler)
    wp_enqueue_script('kinis-header-scroll', get_template_directory_uri() . '/assets/js/header-scroll.js', array(), '3.0.2', true);
    wp_enqueue_script('kinis-interactions', get_template_directory_uri() . '/assets/js/kinis-interactions.js', array(), '3.0.2', true);
}
add_action('wp_enqueue_scripts', 'kinis_enqueue_assets');

// ============================================
// Performance Optimizations
// ============================================

// Add lazy loading to all images except hero (first section)
function kinis_lazy_load_images($content) {
    // Skip if in admin or feed
    if (is_admin() || is_feed()) return $content;
    
    // Add loading="lazy" to img tags that don't already have it
    $content = preg_replace(
        '/<img((?!.*loading=)[^>]*)>/i',
        '<img$1 loading="lazy">',
        $content
    );
    
    return $content;
}
add_filter('the_content', 'kinis_lazy_load_images');

// Defer non-critical JS
function kinis_defer_scripts($tag, $handle, $src) {
    // Don't defer jQuery or admin scripts
    if (is_admin() || $handle === 'jquery-core' || $handle === 'jquery-migrate') {
        return $tag;
    }
    // Add defer attribute
    if (strpos($tag, 'defer') === false && strpos($tag, 'async') === false) {
        $tag = str_replace(' src=', ' defer src=', $tag);
    }
    return $tag;
}
add_filter('script_loader_tag', 'kinis_defer_scripts', 10, 3);

// Preload critical fonts
function kinis_preload_fonts() {
    echo '<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Phudu:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap">' . "\n";
}
add_action('wp_head', 'kinis_preload_fonts', 1);

// Remove unnecessary WordPress bloat
function kinis_cleanup_head() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'rest_output_link_wp_head');
    remove_action('wp_head', 'wp_oembed_add_discovery_links');
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    
    // Remove block library CSS if not using Gutenberg on frontend
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-blocks-style');
    wp_dequeue_style('global-styles');
    wp_dequeue_style('classic-theme-styles');
}
add_action('wp_enqueue_scripts', 'kinis_cleanup_head', 100);

// Disable emojis completely
function kinis_disable_emojis() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
}
add_action('init', 'kinis_disable_emojis');

// Remove jQuery migrate (not needed for this theme)
function kinis_remove_jquery_migrate($scripts) {
    if (!is_admin() && isset($scripts->registered['jquery'])) {
        $script = $scripts->registered['jquery'];
        if ($script->deps) {
            $script->deps = array_diff($script->deps, array('jquery-migrate'));
        }
    }
}
add_action('wp_default_scripts', 'kinis_remove_jquery_migrate');

// Add resource hints
function kinis_resource_hints($urls, $relation_type) {
    if ($relation_type === 'dns-prefetch') {
        $urls[] = 'https://fonts.googleapis.com';
        $urls[] = 'https://fonts.gstatic.com';
    }
    return $urls;
}
add_filter('wp_resource_hints', 'kinis_resource_hints', 10, 2);

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

// ============================================
// FAQ Custom Post Type & Taxonomy
// ============================================
function kinis_register_faq_cpt() {
    register_taxonomy('faq_category', 'faq', array(
        'labels' => array(
            'name'              => 'Danh mục FAQ',
            'singular_name'     => 'Danh mục FAQ',
            'search_items'      => 'Tìm danh mục',
            'all_items'         => 'Tất cả danh mục',
            'edit_item'         => 'Sửa danh mục',
            'update_item'       => 'Cập nhật danh mục',
            'add_new_item'      => 'Thêm danh mục mới',
            'new_item_name'     => 'Tên danh mục mới',
            'menu_name'         => 'Danh mục FAQ',
        ),
        'hierarchical' => true,
        'show_ui'      => true,
        'show_in_rest' => true,
        'rewrite'      => array('slug' => 'faq-category'),
    ));

    register_post_type('faq', array(
        'labels' => array(
            'name'               => 'FAQ',
            'singular_name'      => 'Câu hỏi',
            'add_new'            => 'Thêm câu hỏi',
            'add_new_item'       => 'Thêm câu hỏi mới',
            'edit_item'          => 'Sửa câu hỏi',
            'new_item'           => 'Câu hỏi mới',
            'view_item'          => 'Xem câu hỏi',
            'search_items'       => 'Tìm câu hỏi',
            'not_found'          => 'Không tìm thấy câu hỏi nào',
            'not_found_in_trash' => 'Không có câu hỏi nào trong thùng rác',
            'menu_name'          => 'FAQ',
        ),
        'public'       => false,
        'show_ui'      => true,
        'show_in_menu' => true,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-editor-help',
        'menu_position'=> 25,
        'supports'     => array('title', 'editor', 'page-attributes'),
        'has_archive'  => false,
        'rewrite'      => false,
        'taxonomies'   => array('faq_category'),
    ));
}
add_action('init', 'kinis_register_faq_cpt');

// ============================================
// FAQ "Hiển thị trên Trang chủ" Meta Box
// ============================================
function kinis_faq_home_meta_box() {
    add_meta_box('kinis_faq_home', 'Hiển thị trên Trang chủ', 'kinis_faq_home_meta_box_html', 'faq', 'side', 'high');
}
add_action('add_meta_boxes', 'kinis_faq_home_meta_box');

function kinis_faq_home_meta_box_html($post) {
    $value = get_post_meta($post->ID, '_kinis_show_on_home', true);
    $current_count = kinis_count_home_faqs($post->ID);
    wp_nonce_field('kinis_faq_home_nonce', 'kinis_faq_home_nonce_field');
    ?>
    <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
        <input type="checkbox" name="kinis_show_on_home" value="1" <?php checked($value, '1'); ?>>
        <span>Hiển thị câu hỏi này trên Trang chủ</span>
    </label>
    <p class="description" style="margin-top:8px;">
        Đang chọn: <strong><?php echo $current_count; ?>/8</strong> câu hỏi trên Trang chủ.
        <?php if ($current_count >= 8 && $value !== '1') : ?>
            <br><span style="color:#d63638;">⚠ Đã đạt giới hạn tối đa 8 câu. Hãy bỏ chọn câu khác trước.</span>
        <?php endif; ?>
    </p>
    <?php
}

function kinis_count_home_faqs($exclude_id = 0) {
    $args = array('post_type' => 'faq', 'post_status' => 'publish', 'meta_key' => '_kinis_show_on_home', 'meta_value' => '1', 'posts_per_page' => -1, 'fields' => 'ids');
    if ($exclude_id) { $args['post__not_in'] = array($exclude_id); }
    $query = new WP_Query($args);
    return $query->found_posts;
}

function kinis_save_faq_home_meta($post_id) {
    if (!isset($_POST['kinis_faq_home_nonce_field'])) return;
    if (!wp_verify_nonce($_POST['kinis_faq_home_nonce_field'], 'kinis_faq_home_nonce')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    if (isset($_POST['kinis_show_on_home']) && $_POST['kinis_show_on_home'] === '1') {
        $current = kinis_count_home_faqs($post_id);
        if ($current < 8) { update_post_meta($post_id, '_kinis_show_on_home', '1'); }
    } else { delete_post_meta($post_id, '_kinis_show_on_home'); }
}
add_action('save_post_faq', 'kinis_save_faq_home_meta');

// Admin column for FAQ home indicator
function kinis_faq_admin_columns($columns) {
    $new = array();
    foreach ($columns as $key => $val) { $new[$key] = $val; if ($key === 'title') { $new['home_faq'] = '🏠 Trang chủ'; } }
    return $new;
}
add_filter('manage_faq_posts_columns', 'kinis_faq_admin_columns');

function kinis_faq_admin_column_content($column, $post_id) {
    if ($column === 'home_faq') {
        echo get_post_meta($post_id, '_kinis_show_on_home', true) === '1' ? '<span style="color:#f97316;font-size:16px;">★</span>' : '—';
    }
}
add_action('manage_faq_posts_custom_column', 'kinis_faq_admin_column_content', 10, 2);

function kinis_faq_sortable_columns($columns) { $columns['home_faq'] = 'home_faq'; return $columns; }
add_filter('manage_edit-faq_sortable_columns', 'kinis_faq_sortable_columns');

function kinis_faq_sort_by_home($query) {
    if (!is_admin() || !$query->is_main_query()) return;
    if ($query->get('orderby') === 'home_faq') { $query->set('meta_key', '_kinis_show_on_home'); $query->set('orderby', 'meta_value'); }
}
add_action('pre_get_posts', 'kinis_faq_sort_by_home');

// ============================================
// Testimonial Custom Post Type
// ============================================
function kinis_register_testimonial_cpt() {
    register_post_type('kinis_testimonial', array(
        'labels' => array(
            'name' => 'Đánh giá khách hàng',
            'singular_name' => 'Đánh giá',
            'add_new' => 'Thêm đánh giá',
            'add_new_item' => 'Thêm đánh giá mới',
            'edit_item' => 'Sửa đánh giá',
            'new_item' => 'Đánh giá mới',
            'view_item' => 'Xem đánh giá',
            'search_items' => 'Tìm đánh giá',
            'not_found' => 'Không tìm thấy đánh giá nào',
            'menu_name' => 'Đánh giá KH',
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-star-filled',
        'menu_position' => 26,
        'supports' => array('title', 'editor', 'page-attributes'),
        'has_archive' => false,
        'rewrite' => false,
    ));
}
add_action('init', 'kinis_register_testimonial_cpt');

// Testimonial meta boxes
function kinis_testimonial_meta_boxes() {
    add_meta_box('kinis_testimonial_meta', 'Thông tin đánh giá', 'kinis_testimonial_meta_html', 'kinis_testimonial', 'side', 'high');
}
add_action('add_meta_boxes', 'kinis_testimonial_meta_boxes');

function kinis_testimonial_meta_html($post) {
    $stars = get_post_meta($post->ID, '_kinis_testimonial_stars', true) ?: '5';
    $category = get_post_meta($post->ID, '_kinis_testimonial_category', true) ?: '';
    $pages = get_post_meta($post->ID, '_kinis_testimonial_pages', true);
    if (!is_array($pages)) $pages = array('home');
    wp_nonce_field('kinis_testimonial_nonce', 'kinis_testimonial_nonce_field');
    $available_pages = array(
        'home' => 'Trang chủ',
        'nomad' => 'Kinis Nomad',
        'lucy' => 'Kinis Lucy',
    );
    ?>
    <p><label><strong>Số sao (1-5):</strong></label><br>
    <select name="kinis_testimonial_stars" style="width:100%;">
        <?php for ($s = 1; $s <= 5; $s++) : ?>
            <option value="<?php echo $s; ?>" <?php selected($stars, $s); ?>><?php echo str_repeat('★', $s) . str_repeat('☆', 5 - $s); ?></option>
        <?php endfor; ?>
    </select></p>
    <p><label><strong>Nhãn danh mục:</strong></label><br>
    <input type="text" name="kinis_testimonial_category" value="<?php echo esc_attr($category); ?>" style="width:100%;" placeholder="VD: Excellent, Great, Fantastic"></p>
    <p><label><strong>Hiển thị ở trang:</strong></label><br>
    <?php foreach ($available_pages as $key => $label) : ?>
        <label style="display:block;margin:4px 0;">
            <input type="checkbox" name="kinis_testimonial_pages[]" value="<?php echo $key; ?>" <?php checked(in_array($key, $pages)); ?>>
            <?php echo $label; ?>
        </label>
    <?php endforeach; ?>
    </p>
    <p class="description">Tiêu đề = Tên khách hàng. Nội dung = Lời đánh giá.<br>Chọn trang mà đánh giá này sẽ hiển thị. Trang chủ luôn được chọn mặc định.</p>
    <?php
}

function kinis_save_testimonial_meta($post_id) {
    if (!isset($_POST['kinis_testimonial_nonce_field'])) return;
    if (!wp_verify_nonce($_POST['kinis_testimonial_nonce_field'], 'kinis_testimonial_nonce')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    if (isset($_POST['kinis_testimonial_stars'])) { update_post_meta($post_id, '_kinis_testimonial_stars', sanitize_text_field($_POST['kinis_testimonial_stars'])); }
    if (isset($_POST['kinis_testimonial_category'])) { update_post_meta($post_id, '_kinis_testimonial_category', sanitize_text_field($_POST['kinis_testimonial_category'])); }
    $pages = isset($_POST['kinis_testimonial_pages']) ? array_map('sanitize_text_field', $_POST['kinis_testimonial_pages']) : array('home');
    update_post_meta($post_id, '_kinis_testimonial_pages', $pages);
}
add_action('save_post_kinis_testimonial', 'kinis_save_testimonial_meta');

// Auto-seed testimonial data on theme activation
function kinis_seed_testimonials() {
    if (get_option('kinis_testimonials_seeded')) return;
    $testimonials = array(
        array('name' => 'Shella D.', 'stars' => 5, 'category' => 'Excellent', 'review' => '"Đây là đôi giày barefoot tốt nhất mà tôi từng thử! Thiết kế tối giản nhưng vẫn đảm bảo bảo vệ, phù hợp hoàn hảo cho những buổi đi bộ dài. Chất liệu nhẹ, thoáng khí, chân cảm nhận được mặt đất rõ ràng."', 'pages' => array('home', 'nomad')),
        array('name' => 'Gregory P.', 'stars' => 5, 'category' => 'Fantastic', 'review' => '"Tôi mua đôi Lucy cho RJ. Theo lời anh ấy: \"Đôi giày này đã thay đổi cách tôi bước đi. Thoải mái tự nhiên, nhẹ nhàng mà vẫn chắc chắn. Giờ tôi chỉ muốn đi bộ thôi!\""', 'pages' => array('home')),
        array('name' => 'Brian K.', 'stars' => 4, 'category' => 'Great', 'review' => '"Tôi vừa trải qua phẫu thuật bàn chân và đôi giày Kinis thực sự rất phù hợp với tình trạng hiện tại. Bàn chân được tự do co duỗi và cảm nhận mặt đất, giúp quá trình phục hồi thoải mái hơn rất nhiều."', 'pages' => array('home', 'nomad')),
        array('name' => 'Jennifer B.', 'stars' => 5, 'category' => 'Excellent', 'review' => '"Tôi rất thích cảm giác vừa vặn của đôi giày! Giày rất nhẹ và ôm chân hoàn hảo từ lần đầu tiên. Rất phù hợp cho những ai đang tìm kiếm giày barefoot cho đời thường."', 'pages' => array('home', 'nomad')),
        array('name' => 'Casey B.', 'stars' => 5, 'category' => 'Excellent', 'review' => '"Ban đầu tôi hơi do dự khi mua, nhưng giờ rất vui vì đã chọn chúng cho hành trình barefoot. Sau 2 tuần đi bộ mỗi ngày, cảm giác thăng bằng của tôi cải thiện rõ rệt."', 'pages' => array('home')),
        array('name' => 'Matthew O.', 'stars' => 5, 'category' => 'Excellent', 'review' => '"Đôi giày hoàn hảo với tôi. Tôi không thích mang giày và có cổ chân yếu, nhưng đôi giày này giải quyết được cả hai. Thoải mái như một đôi tất nhưng vẫn có độ bảo vệ của giày."', 'pages' => array('home', 'nomad')),
    );
    $order = 1;
    foreach ($testimonials as $t) {
        $post_id = wp_insert_post(array(
            'post_title' => $t['name'],
            'post_content' => $t['review'],
            'post_status' => 'publish',
            'post_type' => 'kinis_testimonial',
            'menu_order' => $order++,
        ));
        if ($post_id && !is_wp_error($post_id)) {
            update_post_meta($post_id, '_kinis_testimonial_stars', $t['stars']);
            update_post_meta($post_id, '_kinis_testimonial_category', $t['category']);
        }
    }
    update_option('kinis_testimonials_seeded', true);
}
add_action('after_switch_theme', 'kinis_seed_testimonials', 35);

// Show author credit on FAQ and Testimonial admin pages
function kinis_faq_author_credit() {
    $screen = get_current_screen();
    if ($screen && ($screen->post_type === 'faq' || $screen->taxonomy === 'faq_category' || $screen->post_type === 'kinis_testimonial')) {
        echo '<div class="notice notice-info" style="border-left-color:#f97316;"><p style="font-size:14px;"><strong>Tác giả: Arin Nhu Truong</strong></p></div>';
    }
}
add_action('admin_notices', 'kinis_faq_author_credit');

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

// ============================================
// Auto-seed FAQ data on theme activation
// ============================================
function kinis_seed_faq_data() {
    // Check if already seeded
    if (get_option('kinis_faq_seeded')) return;
    
    $faq_data = array(
        array(
            'category' => 'Thông tin chung về brand Kinis',
            'faqs' => array(
                array('q' => 'Kinis có phải là thương hiệu giày không?', 'a' => 'Không hẳn. Kinis là hệ sinh thái chăm sóc sức khỏe vận động dựa trên chỉ số thăng bằng tiên phong tại Việt Nam, với nền tảng khoa học về sự vận động, đội ngũ chuyên môn đến từ Hoa Kỳ và đón đầu công nghệ AI. Hiện tại hệ sinh thái chăm sóc sức khỏe vận động Kinis bao gồm:
- Kinis AI Việt Nam: Công cụ kiểm tra chỉ số thăng bằng tích hợp AI tiên phong tại Việt Nam, được cá nhân hóa dựa trên cơ sở khoa học và chuyên môn vật lý trị liệu đến từ Đội ngũ Chuyên gia Hoa Kỳ.
- Kinis Barefoot Shoes: Dòng giày cho người bàn chân bẹt, giúp bàn chân trở về trạng thái tự nhiên – cân bằng – khỏe mạnh, giảm rủi ro vận động về lâu dài.'),
                array('q' => 'Triết lý hoạt động của Kinis Barefoot là gì?', 'a' => 'Kinis tin rằng, bàn chân con người là một cấu trúc hoàn hảo của tự nhiên, được sinh ra để cảm nhận, thích nghi và tự cân bằng. Kinis không sửa chữa cơ thể con người, mà trả lại cho cơ thể cách vận động mà nó vốn sinh ra để làm, với mẫu giày barefoot kiểu mẫu, giúp:
- Giảm thiểu tối đa sự can thiệp của giày vào đôi bàn chân vốn dĩ đã có cấu tạo hoàn hảo để thích ứng với môi trường xung quanh
- Trả lại cho bàn chân khả năng cảm nhận – thích nghi – tự cân bằng mà nó vốn có
- Giúp cơ thể vận động đúng cách, thay vì che giấu vấn đề bằng đệm dày hay hỗ trợ nhân tạo'),
                array('q' => 'Vì sao chuyển động tự nhiên (natural movement) lại quan trọng?', 'a' => 'Chuyển động tự nhiên (natural movement) là cách cơ thể di chuyển đúng với cơ chế sinh học vốn có, nơi bàn chân, cơ bắp, khớp và hệ thần kinh phối hợp nhịp nhàng mà không bị ép buộc hay can thiệp quá mức bởi giày dép, thiết bị hoặc thói quen sai.
Kinis lấy chuyển động tự nhiên làm nền tảng để thiết kế mẫu giày barefoot đảm bảo:
- Giúp phân bổ trọng lực cơ thể hiệu quả và giảm áp lực lên các khớp xương vận động.
- Cải thiện thăng bằng và khả năng kiểm soát cơ thể
- Kích hoạt cơ bàn chân và cơ lõi đúng vai trò
- Là nền tảng cho vận động an toàn và bền vững lâu dài'),
                array('q' => 'Vì sao Kinis đặt sức khỏe bàn chân lên hàng đầu?', 'a' => 'Kinis tin rằng, bàn chân là nền móng của mọi chuyển động. Khi nền móng khỏe, các khớp phía trên như gối, hông và cột sống mới hoạt động ổn định và bền vững.'),
                array('q' => 'Giày Kinis có được thiết kế dựa trên khoa học hay nghiên cứu không?', 'a' => 'Giày Kinis Barefoot được thiết kế dựa trên nguyên lý khoa học về cơ sinh học (biomechanics) và cấu trúc bàn chân, nhằm hỗ trợ chuyển động tự nhiên, cải thiện chỉ số thăng bằng và cảm nhận mặt đất tốt hơn. Đồng thời, thiết kế zero-drop, mũi giày rộng và đế linh hoạt - điển hình của dòng giày barefoot sẽ giúp bàn chân hoạt động đúng chức năng vốn có.
Tóm lại, giày barefoot Kinis không phải là giày thể thao thông thường mà là sản phẩm dựa trên nguyên tắc vận động tự nhiên (natural movement) và nghiên cứu về khoa học trong biomechanics (cơ học chuyển động) để mang đến trải nghiệm "như đi chân trần", đưa bàn chân về đúng chức năng vốn có của nó.'),
            ),
        ),
        array(
            'category' => 'Thông tin chung về Kinis Barefoot',
            'faqs' => array(
                array('q' => 'Giày barefoot Kinis là giày gì?', 'a' => 'Giày barefoot Kinis là một dòng sản phẩm được phát triển dựa trên triết lý "barefoot" (giày mang cảm giác như đi chân trần), được thiết kế để bàn chân vận động gần với trạng thái tự nhiên nhất, giúp cải thiện cảm nhận mặt đất, thăng bằng và tư thế khi di chuyển hằng ngày.'),
                array('q' => 'Giày barefoot Kinis có phải giày minimalist không?', 'a' => 'Có. Giày barefoot Kinis có thể xem là một trong những nhóm giày minimalist, được thiết kế để mô phỏng cảm giác đi chân trần và cho phép bàn chân vận động tự nhiên nhất có thể.'),
                array('q' => 'Giày barefoot Kinis khác gì giày thông thường?', 'a' => 'Giày barefoot nói chung và giày barefoot Kinis nói riêng khác rất nhiều so với giày thông thường bạn hay đi hàng ngày. Nổi bật nhất để phân biệt cơ bản giày barefoot và giày thông thường có thể dựa vào 4 yếu tố:
- Đế phẳng (zero-drop): gót và mũi bằng nhau không làm ảnh hưởng đến dáng đi và cấu trúc tự nhiên của bàn chân.
- Mũi giày rộng (wide toe box): thiết kế giày barefoot có mũi giày rộng giúp ngón chân xòe tự nhiên, khác với giày truyền thống thường phần mũi bị bó hẹp lại.
- Đế mỏng, linh hoạt: mang lại cảm giác như đi chân trần, giúp cảm nhận mặt đất tốt hơn nhưng vẫn đảm bảo giúp bạn tránh những vật cản gây tổn thương bàn chân.
- Không hỗ trợ vòm nhân tạo ở phần gót chân: Điều này giúp khuyến khích cơ bàn chân hoạt động một cách linh hoạt ở trạng thái tự nhiên.'),
                array('q' => 'Giày barefoot Kinis có phải là một loại giày y tế không?', 'a' => 'Không. Giày barefoot Kinis không phải giày điều trị hay chữa bệnh, mà là giày hỗ trợ vận động tự nhiên và sức khỏe bàn chân khi sử dụng đúng cách.'),
                array('q' => 'Giày barefoot Kinis phù hợp cho ai?', 'a' => 'Là mẫu giày chăm sóc sức khỏe vận động một cách tự nhiên, giày barefoot Kinis phù hợp cho:
- Người đi bộ nhiều, đứng nhiều
- Người muốn cải thiện thăng bằng & tư thế
- Người mới bắt đầu quan tâm đến triết lý "barefoot" và muốn bắt đầu thay thế giày truyền thống sang giày barefoot
- Người tập luyện, vận động nhẹ đến trung bình
- Người trung niên muốn vận động an toàn.'),
                array('q' => 'Giày barefoot Kinis có hiệu quả ngay từ lần đầu sử dụng không?', 'a' => 'Đối với người mới bắt đầu làm quen với giày barefoot thì cần thời gian thích ứng và cảm nhận. Thời gian làm quen giày tùy vào cơ thể của mỗi người. Thời gian thích nghi giày barefoot từ 3-6 tháng.
Sau thời gian thích nghi, bạn sẽ cảm nhận được thay đổi tích cực: cảm nhận được chuyển động tự nhiên của hệ vận động, cảm nhận được mặt đất tốt hơn, đồng thời cải thiện thăng bằng của bàn chân và cơ thể.'),
                array('q' => 'Những người nào không phù hợp mang giày barefoot Kinis?', 'a' => 'Kinis không khuyến khích những trường hợp này mang giày barefoot Kinis mà tốt nhất nên tham vấn bác sĩ hoặc chuyên gia vật lý trị liệu trước khi chuyển sang giày barefoot. Bao gồm:
- Những người đang gặp chấn thương cấp tính ở bàn chân, cổ chân, gân Achilles
- Những trường hợp bị viêm gan bàn chân (plantar fasciitis) giai đoạn đau nhiều
- Người thoái hóa khớp nặng, biến dạng bàn chân nghiêm trọng
- Người mới phẫu thuật hoặc đang trong giai đoạn phục hồi y khoa'),
            ),
        ),
        array(
            'category' => 'Câu hỏi về giày barefoot Kinis Nomad',
            'faqs' => array(
                array('q' => 'Kinis Nomad là dòng giày gì?', 'a' => 'Kinis Nomad là dòng giày barefoot kiểu mẫu với thiết kế "zero-drop", mũi giày rộng, nhẹ, tối giản, phù hợp sử dụng trong luyện tập thể thao, tập gym, yoga.'),
                array('q' => 'Giày barefoot Kinis Nomad có thể dùng để chạy bộ không?', 'a' => 'Giày barefoot Kinis Nomad không phải giày chạy bộ chuyên dụng. Đây là mẫu giày phù hợp để luyện tập thể dục - thể thao, leo núi, hiking, tập gym, tập yoga/pilates.
Kinis không khuyến khích bạn sử dụng giày barefoot Kinis Nomad để chạy bộ đường dài hoặc chạy với tốc độ cao khi chưa thích nghi với barefoot.'),
                array('q' => 'Giày barefoot Kinis Nomad là giày nam hay nữ?', 'a' => 'Giày barefoot Kinis Nomad là loại giày unisex, phù hợp cho cả nam và nữ. Bạn có thể chọn lựa size và màu phù hợp một cách dễ dàng tại Hệ thống phân phối Bye Béo.'),
                array('q' => 'Điểm khác biệt giữa giày barefoot Kinis Nomad và các mẫu giày thông thường khác là gì?', 'a' => 'Giày barefoot Kinis Nomad là một mẫu giày barefoot điển hình, với thiết kế barefoot tối giản: zero-drop, đế linh hoạt, mũi giày rộng - giúp bàn chân chuyển động tự nhiên, linh hoạt, gia tăng cảm nhận với môi trường xung quanh, từ đó giúp đôi chân hoạt động đúng chức năng vốn có của nó.'),
                array('q' => 'Cách vệ sinh giày barefoot Kinis Nomad như thế nào?', 'a' => 'Giày barefoot Kinis Nomad RẤT DỄ VỆ SINH. Kinis Nomad được làm từ chất liệu chuyên biệt thoáng khí, bền bỉ, bạn có thể giặt tay và giặt máy ở chế độ nhẹ mà không ảnh hưởng đến chất lượng giày.'),
                array('q' => 'Giày barefoot Kinis Nomad cần thời gian làm quen và thích nghi không?', 'a' => 'Có. Vì là giày barefoot kiểu mẫu, nên giày barefoot Kinis Nomad cần thời gian để đôi chân thích nghi. Kinis đề xuất thời gian như sau:
Giai đoạn 1 (kéo dài từ 1-2 tuần)
- Mang 30–60 phút/ngày
- Sử dụng trong các hoạt động nhẹ: đi bộ trong nhà, sinh hoạt hằng ngày
Giai đoạn 2 (1-2 tuần tiếp theo)
- Tăng thời gian lên 1–2 giờ/ngày
- Bắt đầu sử dụng khi tập luyện nhẹ (yoga, pilates)
Giai đoạn 3 (Sau 1–2 tháng)
- Có thể mang thường xuyên hơn
- Kết hợp tập luyện đa dạng hơn theo khả năng cá nhân
Lưu ý, thời gian thích nghi tùy vào mỗi người. Nếu bạn là người mới chuyển từ giày truyền thống sang giày barefoot, tốt nhất nên làm quen trước với mẫu giày Kinis Lucy.'),
                array('q' => 'Lưu ý gì khi sử dụng giày barefoot Kinis Nomad?', 'a' => 'Có 2 điểm cần lưu ý khi bạn sử dụng giày Nomad:
- Cần thời gian để bàn chân thích nghi với thiết kế giày barefoot, tối đa 6 tháng.
- Trên nền đất ướt, Kinis Nomad bị giảm khả năng bám dính.'),
                array('q' => 'Có dấu hiệu nào để biết được giày barefoot Kinis Nomad đang thích nghi tốt với bàn chân?', 'a' => 'Trong thời gian thích nghi từ giày thông thường sang giày barefoot Kinis Nomad, bạn sẽ cảm nhận những thay đổi của bàn chân như: căng nhẹ ở lòng bàn chân, cổ chân, bắp chân; cảm giác mỏi cơ nhưng giảm dần sau vài ngày. ĐÂY LÀ NHỮNG DẤU HIỆU HOÀN TOÀN BÌNH THƯỜNG, cho thấy chân của bạn đang dần thích ứng với giày barefoot Kinis Nomad.
Tuy nhiên, nếu bạn cảm thấy các cơn đau nhói, đau tăng dần, đau một điểm cố định, đau buổi sáng khi bước xuống giường thì tốt nhất nên giảm thời gian đi giày barefoot Kinis Nomad hoặc tạm ngưng một thời gian để chân hồi phục.'),
                array('q' => 'Tôi sử dụng giày barefoot Kinis Nomad thay cho vớ/tất khi đi tập gym được không?', 'a' => 'Hoàn toàn được. Giày barefoot Kinis Nomad được thiết kế để sử dụng thay cho vớ/tất khi tập gym, mang lại cảm giác gần như đi chân trần nhưng vẫn đảm bảo vệ sinh và an toàn. Phần đế mỏng zero-drop và mũi giày rộng giúp bàn chân tiếp đất tự nhiên, ổn định khi tập các bài tập như squat, deadlift.
Lưu ý: Nếu mới làm quen barefoot, hãy bắt đầu với thời gian và cường độ nhẹ để cơ thể thích nghi.'),
                array('q' => 'Đế giày barefoot Kinis Nomad mỏng như thế có đảm bảo độ bền không?', 'a' => 'Có. Đế của Kinis Nomad được thiết kế mỏng đúng chuẩn "barefoot" để mang lại cảm giác chân trần, nhưng vẫn được làm từ chất liệu cao su bền và linh hoạt giúp chịu lực tốt, không bị rách dễ dàng trong sử dụng hàng ngày và tập luyện trong phòng gym.
Tuy mỏng, nhưng độ bám và độ bền của đế giày barefoot Kinis Nomad vẫn phù hợp với các hoạt động thông thường.
Như mọi giày barefoot khác, nếu bạn thường xuyên tiếp xúc với bề mặt rất thô ráp hoặc vật sắc nhọn, độ mòn sẽ nhanh hơn — nhưng với điều kiện tập luyện bình thường, Kinis Nomad vẫn đảm bảo độ bền và bảo vệ cho bàn chân.'),
            ),
        ),
        array(
            'category' => 'Câu hỏi về giày đi bộ Kinis Lucy',
            'faqs' => array(
                array('q' => 'Kinis Lucy có phải là giày barefoot không?', 'a' => 'Không hẳn. Giày Kinis Lucy tuy vẫn đảm bảo một số thiết kế điển hình của một mẫu giày barefoot (đế phẳng, mũi giày rộng, không đệm giày ở gót), nhưng có tính ứng dụng cao và không cần thời gian thích nghi giống với các mẫu giày barefoot khác.
Nói cách khác, Kinis Lucy dành cho người mới chuyển tiếp từ việc đi giày truyền thống sang đi giày barefoot. Dù vậy, Kinis Lucy vẫn giúp:
- Bàn chân chuyển động tự nhiên, tôn trọng cấu trúc nguyên bản của bàn chân
- Gia tăng cảm nhận giữa bàn chân và môi trường xung quanh
- Hỗ trợ thăng bằng và ổn định khi đi bộ
- Không dùng hỗ trợ vòm nhân tạo để khuyến khích cơ bàn chân tự làm việc và mạnh lên theo thời gian
- Giảm các nguy cơ chấn thương về chân do những nguyên nhân đến từ giày'),
                array('q' => 'Giày Kinis Lucy có chứng nhận y tế hay chứng nhận về sức khỏe bàn chân không?', 'a' => 'Có. Giày Kinis Lucy đạt chứng nhận APMA Seal of Acceptance (chứng nhận có lợi cho sức khỏe bàn chân từ Hiệp Hội Y Khoa Chỉnh Hình Hoa Kỳ cấp (American Podiatric Medical Association).
Chứng nhận APMA là một bảo chứng khoa học, chứng minh về hiệu quả của giày Kinis Lucy đối với sức khỏe bàn chân, với các tiêu chí:
- Thiết kế tôn trọng cấu trúc tự nhiên của bàn chân
- Không ảnh hưởng đến dáng đi và tư thế
- Hỗ trợ khả năng thăng bằng và ổn định khi đi bộ
- Phù hợp để mang hằng ngày, lâu dài
- Giảm nguy cơ các vấn đề thường gặp do giày mũi hẹp, đế cứng như biến dạng ngón chân cái.'),
                array('q' => 'Giày Kinis Lucy có phải là dành chuyên dụng để đi bộ?', 'a' => 'Đúng. Giày Kinis Lucy là giày chuyên dụng để đi bộ hàng ngày, đi bộ đường dài mà vẫn đảm bảo được "sức khỏe bàn chân", không gây đau nhức.
Bên cạnh đó, giày Kinis Lucy hoàn toàn phù hợp để sử dụng mang hàng ngày (đi học, đi làm), đặc biệt là những người thường xuyên làm việc/di chuyển ngoài trời cần một đôi giày nhẹ - thoáng khí.'),
                array('q' => 'Giày Kinis Lucy có cần thời gian làm quen và thích nghi không?', 'a' => 'Không. Bạn hoàn toàn sử dụng ngay mà không cần thời gian thích nghi. Bởi lẽ, giày Kinis Lucy là dòng giày dành cho người mới bắt đầu chuyển tiếp từ giày truyền thống sang giày barefoot.'),
                array('q' => 'Giày Kinis Lucy có hỗ trợ cải thiện chỉ số thăng bằng không?', 'a' => 'Có. Giày Kinis Lucy hỗ trợ cải thiện chỉ số thăng bằng của phần thân dưới và toàn bộ cơ thể, nhờ vào thiết kế zero-drop, mũi giày rộng và không có đệm mút nâng đỡ như giày truyền thống, điều này giúp bàn chân tăng cảm nhận mặt đất và kích hoạt cơ bàn chân tự nhiên hơn, từ đó cải thiện thăng bằng và kiểm soát chuyển động theo thời gian.'),
                array('q' => 'Giày Kinis Lucy phù hợp phong cách nào?', 'a' => 'Đây là mẫu giày có tính ứng dụng cao, bạn có thể sử dụng hàng ngày, mang đi làm, đi học đều được. Kinis Lucy đặc biệt thích hợp cho những người theo đuổi phong cách tối giản, năng động.'),
                array('q' => 'Giày Kinis Lucy có thể là giày sử dụng cả ngày không?', 'a' => 'Có. Kinis Lucy được thiết kế để đi cả ngày: đi làm – đi chơi – dạo phố cuối tuần, vẫn giữ sự thoải mái và tự nhiên cho bàn chân.'),
            ),
        ),
        array(
            'category' => 'Câu hỏi liên quan đến tình trạng bàn chân',
            'faqs' => array(
                array('q' => 'Tôi bị bàn chân bẹt có thể mang giày barefoot Kinis được không?', 'a' => 'Có, bàn chân bẹt có thể mang giày barefoot Kinis, bởi vì giày barefoot không có đệm nâng đỡ, mũi giày rộng và thiết kế vừa vặn tự nhiên giúp hỗ trợ quá trình điều trị những vấn đề liên quan đến bàn chân như bàn chân bẹt, giảm tình trạng đau nhức, mất thăng bằng khi vận động.
TUY NHIÊN, bạn cần lưu ý:
- Giày barefoot Kinis không phải là giày chuyên dụng trong y tế.
- Giày barefoot Kinis đóng vai trò là sản phẩm hỗ trợ, không phải là sản phẩm thay thế cho phương pháp điều trị về bệnh lý bàn chân bẹt nhẹ.
- Đối với người có tình trạng bàn chân bẹt nặng và liên quan đến các bệnh lý khác, cần tham khảo ý kiến bác sĩ.'),
                array('q' => 'Tôi thường xuyên bị đau nhức chân thì dùng giày barefoot Kinis có đỡ hơn không?', 'a' => 'Trước tiên phải xác định nguyên nhân đau nhức đến từ đâu.
Nếu nguyên nhân đến từ giày truyền thống/giày cao gót quá chật gây đau/nhức, thì bạn hoàn toàn có thể cân nhắc chuyển sang giày barefoot Kinis để bàn chân có thể chuyển động tự nhiên (natural movement) vốn có, giúp tăng cường cơ bàn chân và cải thiện dáng đi tự nhiên, nhưng cần chuyển đổi dần dần.
Còn nếu nguyên nhân đau nhức từ các bệnh lý khác, bạn cần thăm khám bác sĩ chuyên môn để có phác đồ chuyên sâu.'),
                array('q' => 'Người lớn tuổi có phù hợp đi giày barefoot Kinis không?', 'a' => 'Hoàn toàn phù hợp. Giày barefoot Kinis có nhiều lợi ích phù hợp với người lớn tuổi:
- Cải thiện thăng bằng: Giày barefoot Kinis cho phép ngón chân xòe rộng, tạo nền tảng vững chắc, giúp phân bổ trọng lượng tốt hơn, tăng cường sức mạnh cơ gấp ngón chân, rất quan trọng để duy trì thăng bằng, đặc biệt ở người trên 60 tuổi.
- Tăng cường sức mạnh bàn chân & mắt cá chân: Giày barefoot Kinis cho phép chuyển động tự nhiên, giúp các cơ, gân và dây chằng hoạt động nhiều hơn, từ đó giúp hệ vận động của người lớn tuổi ngày càng khỏe hơn một cách tự nhiên.
- Cải thiện tư thế: Giúp dáng đi tự nhiên hơn, giảm căng thẳng lên các chi dưới, từ đó giảm tình trạng nhức, mỏi hay gặp của người lớn tuổi.
- Tăng cảm nhận môi trường xung quanh, kích hoạt cảm giác từ chân truyền lên não bộ.
Tuy nhiên, tùy vào thể trạng của mỗi người để có thời gian làm quen và thích ứng với giày barefoot Kinis phù hợp.'),
            ),
        ),
        array(
            'category' => 'Câu hỏi về cách mua sắm và quyền lợi',
            'faqs' => array(
                array('q' => 'Tôi có thể đặt mua giày Kinis ở đâu?', 'a' => 'Hiện tại Bye Beo là Nhà phân phối ĐỘC QUYỀN giày barefoot Kinis duy nhất tại Việt Nam. Bạn có thể mua trực tiếp giày Kinis tại Hệ sinh thái Bye Beo.'),
                array('q' => 'Có ưu đãi gì khi mua giày barefoot Kinis không?', 'a' => 'Có. Khi mua sắm giày Kinis tại hệ sinh thái phân phối Bye Béo, bạn còn nhận được nhiều quyền lợi chăm sóc sức khỏe vận động toàn diện đến từ Kinis, bao gồm:
- Miễn phí tạo tài khoản và thực hiện kiểm tra chỉ số thăng bằng Kinis BalancePro tích hợp AI tiên phong tại Việt Nam
- Miễn phí bài tập luyện cải thiện thăng bằng được cá nhân hóa, dựa trên nghiên cứu khoa học và đội ngũ chuyên môn đến từ Hoa Kỳ
- Hỗ trợ kiểm tra và tư vấn trực tiếp lộ trình chăm sóc sức khỏe vận động tại Hệ thống Balance Center Buôn Mê Thuột.'),
            ),
        ),
        array(
            'category' => 'Câu hỏi về cảm nhận và kỳ vọng',
            'faqs' => array(
                array('q' => 'Giày barefoot Kinis có thoải mái ngay từ lần đầu mang không?', 'a' => 'Điều này tùy thuộc vào tình trạng của mỗi người.
- Nếu bạn đã làm quen với giày barefoot trước đó thì hoàn toàn cảm thấy thoải mái và linh hoạt ngay.
- Còn nếu bạn chưa từng đi giày thiết kế barefoot trước đó, thì bạn cần thời gian để bàn chân thích nghi tối đa 6 tháng.'),
                array('q' => 'Giày Kinis có phù hợp cho vận động cường độ cao không?', 'a' => 'Hiện tại, Kinis Barefoot phân phối 2 dòng sản phẩm chính tại Hệ thống Bye Beo gồm: Kinis Nomad và Kinis Lucy.
- Đối với dòng giày barefoot Kinis Nomad: Bạn có thể dùng tập gym, các bài tập huấn luyện chức năng hoặc tập yoga, pilates trong nhà.
- Đối với dòng giày Kinis Lucy sẽ phù hợp đi bộ, sinh hoạt hằng ngày, đi làm, đi học, không khuyến khích sử dụng trong trường hợp vận động cao.
Nếu bạn muốn sử dụng giày barefoot Kinis chạy đường dài, tập luyện cường độ cao trong phòng gym thì bạn cần làm quen với giày barefoot ít nhất 6 tháng.'),
                array('q' => 'Giày barefoot Kinis có giúp giảm đau lưng hoặc đau gối không?', 'a' => 'Trong nhiều trường hợp, giày barefoot Kinis có thể hỗ trợ cải thiện tư thế và phân bổ lực tự nhiên, từ đó giúp giảm áp lực lên lưng và gối. Tuy nhiên, nếu cơn đau do chấn thương, bệnh lý hoặc sai lệch cấu trúc nghiêm trọng thì bạn nên kết hợp với tư vấn y tế hoặc giải pháp chuyên sâu hơn, bởi vì giày barefoot Kinis không phải là giày chuyên dụng trong y tế.'),
                array('q' => 'Tôi có thể mang giày barefoot Kinis cả ngày không?', 'a' => 'Hoàn toàn được nếu bạn đã thích nghi và hoàn toàn cảm thấy thoải mái khi mang giày barefoot Kinis.
Còn nếu bạn là người mới tập mang giày barefoot, Kinis khuyến nghị dùng xen kẽ với giày khác trong giai đoạn đầu, sau đó tăng dần thời gian sử dụng để tránh quá tải cơ bàn chân.'),
            ),
        ),
        array(
            'category' => 'Chăm sóc - Vệ sinh',
            'faqs' => array(
                array('q' => 'Khi nào nên thay một đôi giày barefoot Kinis?', 'a' => 'Thời gian sử dụng phụ thuộc tần suất và bề mặt dùng giày. Nếu giày barefoot Kinis của bạn có những dấu hiệu này thì nên thay:
- Đế mòn đáng kể làm giảm độ bám
- Cảm giác bảo vệ giảm đáng kể
- Dấu hiệu mất form dáng, rách.'),
                array('q' => 'Vệ sinh giày Kinis như thế nào?', 'a' => 'Các mẫu giày Kinis gồm giày barefoot Kinis Nomad và giày Kinis Lucy hoàn toàn có thể giặt tay hoặc giặt máy ở chế độ nhẹ, sau đó phơi khô tự nhiên. Không sử dụng máy sấy nhiệt độ cao để làm khô giày.'),
                array('q' => 'Làm sao hạn chế mùi khi mang giày barefoot Kinis?', 'a' => 'Giày barefoot Kinis được làm từ chất liệu vải chuyên biệt, có khả năng kháng khuẩn, hạn chế mùi. Tuy nhiên, để giày luôn thơm tho và sạch sẽ, bạn nên:
- Phơi giày nơi thoáng khí sau khi sử dụng
- Có thể dùng tất mỏng hoặc xịt khử mùi tự nhiên
- Tránh mang liên tục nhiều giờ trong môi trường ẩm kín'),
            ),
        ),
        array(
            'category' => 'Giày cho bàn chân bẹt',
            'faqs' => array(
                array('q' => 'Bàn chân bẹt là gì?', 'a' => 'Bàn chân bẹt là tình trạng vòm bàn chân thấp hoặc xẹp xuống, khiến toàn bộ lòng bàn chân gần như tiếp xúc với mặt đất khi đứng. Điều này có thể ảnh hưởng đến: khả năng thăng bằng, dáng đi, áp lực lên gối, hông và cột sống.'),
                array('q' => 'Người bàn chân bẹt nên chọn giày như thế nào?', 'a' => 'Một đôi giày phù hợp cho bàn chân bẹt nên chọn giày có thiết kế phù hợp:
- Có mũi giày rộng
- Đế phẳng, không ép dáng đi
- Không bó ngón, không gò vòm
- Cho phép bàn chân tự điều chỉnh khi tiếp đất
Đây cũng chính là triết lý thiết kế của giày barefoot Kinis để phù hợp cho người bàn chân bẹt muốn bàn chân được hoạt động về đúng cấu trúc tự nhiên, từ đó cải thiện sức mạnh của bàn chân và dáng đi tổng thể.'),
                array('q' => 'Vì sao Kinis là giày cho bàn chân bẹt theo hướng tự nhiên?', 'a' => 'Kinis là giày cho bàn chân bẹt được thiết kế để không nâng vòm cứng, không làm bàn chân phụ thuộc, mà giúp cơ bàn chân hoạt động và thích nghi tốt hơn theo thời gian. Giày hỗ trợ thăng bằng, dáng đi và cảm nhận mặt đất cho người bàn chân bẹt trong sinh hoạt hằng ngày.'),
                array('q' => 'Vì sao người bàn chân bẹt nên cân nhắc giày Kinis?', 'a' => 'Vì Kinis không "sửa" bàn chân bằng đệm nhân tạo mà tôn trọng cấu trúc tự nhiên, giúp bàn chân hoạt động đúng chức năng. Bên cạnh đó, giày Kinis còn hỗ trợ cải thiện cảm giác thăng bằng và giảm nguy cơ lệch trục vận động do giày không phù hợp.'),
                array('q' => 'Kinis Nomad hay Kinis Lucy phù hợp hơn cho người bàn chân bẹt?', 'a' => 'Tùy mục đích sử dụng & mức độ thích nghi để bạn lựa chọn mẫu giày Kinis phù hợp:
- Kinis Lucy phù hợp người mới bắt đầu, sử dụng đi bộ, sinh hoạt hằng ngày và không cần thời gian làm quen
- Kinis Nomad phù hợp người đã quen barefoot (chân trần), tập gym, yoga, vận động nhẹ. Mẫu giày này cần lộ trình thích nghi.'),
                array('q' => 'Mang giày Kinis có giúp cải thiện thăng bằng cho người bàn chân bẹt không?', 'a' => 'Có thể. Với người bàn chân bẹt, giày Kinis sẽ giúp đôi chân hoạt động về đúng cấu trúc tự nhiên và cơ chế sinh học của bàn chân. Đặc biệt thiết kế zero-drop + mũi rộng sẽ giúp tăng cảm nhận mặt đất, kích hoạt cơ bàn chân & cổ chân và cải thiện khả năng kiểm soát trọng tâm khi vận động.'),
                array('q' => 'Người bàn chân bẹt có cần tập thêm bài tập khi mang giày Kinis không?', 'a' => 'Rất nên. Giày Kinis là công cụ hỗ trợ, hiệu quả sẽ cao hơn khi kết hợp:
- Bài tập tăng sức mạnh cơ gan bàn chân
- Bài tập thăng bằng
- Tập luyện theo lộ trình cá nhân hóa của từng người.'),
                array('q' => 'Giày barefoot Kinis có phù hợp với người bàn chân bẹt không?', 'a' => 'Có, trong nhiều trường hợp bàn chân bẹt mức độ nhẹ đến trung bình, giày barefoot Kinis có thể hỗ trợ tích cực.
Lý do:
- Không có đệm nâng vòm nhân tạo giúp tránh làm cơ bàn chân "lười hoạt động"
- Mũi giày rộng cho phép các ngón chân xòe tự nhiên, tăng diện tiếp xúc
- Đế phẳng (zero-drop) giúp phân bổ lực đều hơn khi đứng - đi - di chuyển
Lưu ý quan trọng:
- Kinis không phải giày y tế
- Giày Kinis không thay thế điều trị cho bàn chân bẹt nặng hoặc có biến dạng
- Trong trường hợp đau nhiều / biến dạng rõ thì nên tham vấn bác sĩ'),
            ),
        ),
    );
    
    $order = 1;
    foreach ($faq_data as $cat_index => $cat) {
        // Create or get category term
        $term = term_exists($cat['category'], 'faq_category');
        if (!$term) {
            $term = wp_insert_term($cat['category'], 'faq_category', array('description' => '', 'slug' => ''));
        }
        if (is_wp_error($term)) continue;
        $term_id = is_array($term) ? $term['term_id'] : $term;
        
        foreach ($cat['faqs'] as $faq) {
            // Check if already exists
            $existing = get_posts(array(
                'post_type' => 'faq',
                'title' => $faq['q'],
                'posts_per_page' => 1,
                'post_status' => 'any',
            ));
            if (!empty($existing)) { $order++; continue; }
            
            $post_id = wp_insert_post(array(
                'post_title'   => $faq['q'],
                'post_content' => $faq['a'],
                'post_status'  => 'publish',
                'post_type'    => 'faq',
                'menu_order'   => $order,
            ));
            if ($post_id && !is_wp_error($post_id)) {
                wp_set_object_terms($post_id, array((int)$term_id), 'faq_category');
            }
            $order++;
        }
    }
    
    update_option('kinis_faq_seeded', true);
}
add_action('after_switch_theme', 'kinis_seed_faq_data', 30);
