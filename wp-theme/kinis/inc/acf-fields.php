<?php
/**
 * ACF Field Registration for Kinis Theme
 * Requires Advanced Custom Fields plugin (free version)
 */

if (!function_exists('acf_add_local_field_group')) {
    return;
}

// ============================================
// Front Page Fields
// ============================================
acf_add_local_field_group(array(
    'key' => 'group_kinis_front_page',
    'title' => 'Trang chủ - Nội dung',
    'fields' => array(
        array('key' => 'field_fp_hero_title', 'label' => 'Hero - Tiêu đề chính', 'name' => 'hero_title', 'type' => 'text', 'default_value' => 'bàn chân Việt', 'instructions' => 'Dòng tiêu đề chính trên hero banner'),
        array('key' => 'field_fp_hero_subtitle', 'label' => 'Hero - Mô tả', 'name' => 'hero_subtitle', 'type' => 'textarea', 'default_value' => 'Khôi phục cơ chế sinh học và vận động tự nhiên của bàn chân', 'rows' => 2),
        array('key' => 'field_fp_hero_cta1', 'label' => 'Hero - Nút CTA 1', 'name' => 'hero_cta1', 'type' => 'text', 'default_value' => 'Tìm hiểu giày Kinis'),
        array('key' => 'field_fp_hero_cta2', 'label' => 'Hero - Nút CTA 2', 'name' => 'hero_cta2', 'type' => 'text', 'default_value' => 'Thông tin khoa học'),
        array('key' => 'field_fp_section_product', 'label' => 'Tiêu đề mục Sản phẩm', 'name' => 'section_product_title', 'type' => 'text', 'default_value' => 'Sản phẩm giày Kinis'),
        array('key' => 'field_fp_section_awaken_1', 'label' => 'Mục Đánh thức - Dòng 1', 'name' => 'section_awaken_1', 'type' => 'text', 'default_value' => 'Đánh thức'),
        array('key' => 'field_fp_section_awaken_2', 'label' => 'Mục Đánh thức - Dòng 2', 'name' => 'section_awaken_2', 'type' => 'text', 'default_value' => 'sức mạnh bản năng'),
        array('key' => 'field_fp_section_awaken_3', 'label' => 'Mục Đánh thức - Dòng 3', 'name' => 'section_awaken_3', 'type' => 'text', 'default_value' => 'của bàn chân'),
        array('key' => 'field_fp_section_diff_title', 'label' => 'Mục Khác biệt - Tiêu đề', 'name' => 'section_diff_title', 'type' => 'text', 'default_value' => 'khác biệt?'),
        array('key' => 'field_fp_section_diff_desc', 'label' => 'Mục Khác biệt - Mô tả', 'name' => 'section_diff_desc', 'type' => 'textarea', 'default_value' => 'Thiết kế giày Kinis tôn trọng hoàn toàn cấu trúc tự nhiên của bàn chân, dựa trên nền tảng khoa học vận động và cơ chế sinh học tự nhiên (natural biomechanics).', 'rows' => 3),
        array('key' => 'field_fp_phone', 'label' => 'Số điện thoại', 'name' => 'phone', 'type' => 'text', 'default_value' => '(+84) 708 803 573'),
        array('key' => 'field_fp_email', 'label' => 'Email', 'name' => 'email', 'type' => 'text', 'default_value' => 'hello@kinis.com'),
    ),
    'location' => array(array(array('param' => 'page_type', 'operator' => '==', 'value' => 'front_page'))),
    'menu_order' => 0,
));

// ============================================
// Story Page Fields
// ============================================
acf_add_local_field_group(array(
    'key' => 'group_kinis_story',
    'title' => 'Câu chuyện - Nội dung',
    'fields' => array(
        array('key' => 'field_st_hero_title', 'label' => 'Tiêu đề', 'name' => 'hero_title', 'type' => 'text', 'default_value' => 'Câu chuyện của chúng tôi'),
        array('key' => 'field_st_hero_subtitle', 'label' => 'Mô tả', 'name' => 'hero_subtitle', 'type' => 'textarea', 'default_value' => 'Từ ý tưởng đến sản phẩm — hành trình nâng niu bàn chân Việt', 'rows' => 2),
        array('key' => 'field_st_timeline_1_title', 'label' => 'Mốc 1 - Tiêu đề', 'name' => 'timeline_1_title', 'type' => 'text', 'default_value' => 'Ý tưởng ra đời'),
        array('key' => 'field_st_timeline_1_desc', 'label' => 'Mốc 1 - Mô tả', 'name' => 'timeline_1_desc', 'type' => 'textarea', 'default_value' => 'Xuất phát từ nỗi đau chân khi luyện tập, nhóm sáng lập quyết định tạo ra giải pháp lót giày khoa học.', 'rows' => 2),
        array('key' => 'field_st_timeline_2_title', 'label' => 'Mốc 2 - Tiêu đề', 'name' => 'timeline_2_title', 'type' => 'text', 'default_value' => 'Nghiên cứu & Phát triển'),
        array('key' => 'field_st_timeline_2_desc', 'label' => 'Mốc 2 - Mô tả', 'name' => 'timeline_2_desc', 'type' => 'textarea', 'default_value' => 'Hợp tác với các chuyên gia sinh cơ học để thiết kế cấu trúc lót giày tối ưu.', 'rows' => 2),
        array('key' => 'field_st_timeline_3_title', 'label' => 'Mốc 3 - Tiêu đề', 'name' => 'timeline_3_title', 'type' => 'text', 'default_value' => 'Ra mắt Kinis Lucy'),
        array('key' => 'field_st_timeline_3_desc', 'label' => 'Mốc 3 - Mô tả', 'name' => 'timeline_3_desc', 'type' => 'textarea', 'default_value' => 'Sản phẩm đầu tiên được giới thiệu, nhận phản hồi tích cực từ cộng đồng thể thao.', 'rows' => 2),
        array('key' => 'field_st_timeline_4_title', 'label' => 'Mốc 4 - Tiêu đề', 'name' => 'timeline_4_title', 'type' => 'text', 'default_value' => 'Kinis Nomad'),
        array('key' => 'field_st_timeline_4_desc', 'label' => 'Mốc 4 - Mô tả', 'name' => 'timeline_4_desc', 'type' => 'textarea', 'default_value' => 'Mở rộng dòng sản phẩm với Kinis Nomad dành cho dân phiêu lưu.', 'rows' => 2),
    ),
    'location' => array(array(array('param' => 'page_template', 'operator' => '==', 'value' => 'page-cau-chuyen.php'))),
));

// ============================================
// Product Lucy Fields
// ============================================
acf_add_local_field_group(array(
    'key' => 'group_kinis_lucy',
    'title' => 'Kinis Lucy - Nội dung',
    'fields' => array(
        array('key' => 'field_lucy_hero_title', 'label' => 'Tiêu đề', 'name' => 'hero_title', 'type' => 'text', 'default_value' => 'Kinis Lucy'),
        array('key' => 'field_lucy_hero_subtitle', 'label' => 'Mô tả ngắn', 'name' => 'hero_subtitle', 'type' => 'textarea', 'default_value' => '', 'rows' => 2),
        array('key' => 'field_lucy_price', 'label' => 'Giá sản phẩm', 'name' => 'product_price', 'type' => 'text', 'default_value' => ''),
        array('key' => 'field_lucy_buy_url', 'label' => 'Link mua hàng', 'name' => 'buy_url', 'type' => 'url', 'default_value' => ''),
    ),
    'location' => array(array(array('param' => 'page_template', 'operator' => '==', 'value' => 'page-san-pham-lucy.php'))),
));

// ============================================
// Product Nomad Fields
// ============================================
acf_add_local_field_group(array(
    'key' => 'group_kinis_nomad',
    'title' => 'Kinis Nomad - Nội dung',
    'fields' => array(
        array('key' => 'field_nomad_hero_title', 'label' => 'Tiêu đề', 'name' => 'hero_title', 'type' => 'text', 'default_value' => 'Kinis Nomad'),
        array('key' => 'field_nomad_hero_subtitle', 'label' => 'Mô tả ngắn', 'name' => 'hero_subtitle', 'type' => 'textarea', 'default_value' => '', 'rows' => 2),
        array('key' => 'field_nomad_price', 'label' => 'Giá sản phẩm', 'name' => 'product_price', 'type' => 'text', 'default_value' => ''),
        array('key' => 'field_nomad_buy_url', 'label' => 'Link mua hàng', 'name' => 'buy_url', 'type' => 'url', 'default_value' => ''),
    ),
    'location' => array(array(array('param' => 'page_template', 'operator' => '==', 'value' => 'page-san-pham-nomad.php'))),
));

// ============================================
// Science Page Fields
// ============================================
acf_add_local_field_group(array(
    'key' => 'group_kinis_science',
    'title' => 'Khoa học - Nội dung',
    'fields' => array(
        array('key' => 'field_sci_hero_title', 'label' => 'Tiêu đề', 'name' => 'hero_title', 'type' => 'text', 'default_value' => ''),
        array('key' => 'field_sci_hero_subtitle', 'label' => 'Mô tả', 'name' => 'hero_subtitle', 'type' => 'textarea', 'default_value' => '', 'rows' => 2),
    ),
    'location' => array(array(array('param' => 'page_template', 'operator' => '==', 'value' => 'page-khoa-hoc.php'))),
));

// ============================================
// Target Audience Pages Fields (Gym, Running, Flat Feet)
// ============================================
$audience_pages = array(
    array('key' => 'gym', 'title' => 'Gym & Fitness', 'template' => 'page-doi-tuong-gym.php'),
    array('key' => 'run', 'title' => 'Chạy bộ', 'template' => 'page-doi-tuong-chay-bo.php'),
    array('key' => 'flat', 'title' => 'Bàn chân bẹt', 'template' => 'page-doi-tuong-ban-chan-bet.php'),
);

foreach ($audience_pages as $ap) {
    acf_add_local_field_group(array(
        'key' => 'group_kinis_' . $ap['key'],
        'title' => $ap['title'] . ' - Nội dung',
        'fields' => array(
            array('key' => 'field_' . $ap['key'] . '_hero_title', 'label' => 'Tiêu đề', 'name' => 'hero_title', 'type' => 'text', 'default_value' => ''),
            array('key' => 'field_' . $ap['key'] . '_hero_subtitle', 'label' => 'Mô tả', 'name' => 'hero_subtitle', 'type' => 'textarea', 'default_value' => '', 'rows' => 2),
        ),
        'location' => array(array(array('param' => 'page_template', 'operator' => '==', 'value' => $ap['template']))),
    ));
}

// ============================================
// FAQ Page Fields
// ============================================
acf_add_local_field_group(array(
    'key' => 'group_kinis_faq',
    'title' => 'FAQ - Danh mục & Câu hỏi',
    'fields' => array(
        array('key' => 'field_faq_hero_title', 'label' => 'Tiêu đề trang', 'name' => 'hero_title', 'type' => 'text', 'default_value' => 'Câu hỏi thường gặp'),
        array('key' => 'field_faq_hero_subtitle', 'label' => 'Mô tả trang', 'name' => 'hero_subtitle', 'type' => 'textarea', 'default_value' => 'Những thắc mắc phổ biến về giày barefoot và sản phẩm Kinis.', 'rows' => 2),
        array(
            'key' => 'field_faq_categories',
            'label' => 'Danh mục FAQ',
            'name' => 'faq_categories',
            'type' => 'repeater',
            'min' => 0,
            'layout' => 'block',
            'button_label' => 'Thêm danh mục',
            'sub_fields' => array(
                array('key' => 'field_faq_cat_name', 'label' => 'Tên danh mục', 'name' => 'category_name', 'type' => 'text'),
                array(
                    'key' => 'field_faq_cat_items',
                    'label' => 'Câu hỏi trong danh mục',
                    'name' => 'questions',
                    'type' => 'repeater',
                    'min' => 0,
                    'layout' => 'row',
                    'button_label' => 'Thêm câu hỏi',
                    'sub_fields' => array(
                        array('key' => 'field_faq_q', 'label' => 'Câu hỏi', 'name' => 'question', 'type' => 'text'),
                        array('key' => 'field_faq_a', 'label' => 'Trả lời', 'name' => 'answer', 'type' => 'wysiwyg', 'media_upload' => 0, 'toolbar' => 'basic'),
                    ),
                ),
            ),
        ),
    ),
    'location' => array(array(array('param' => 'page_template', 'operator' => '==', 'value' => 'page-faq.php'))),
));

// ============================================
// Global Settings (Footer, Contact)
// ============================================
acf_add_local_field_group(array(
    'key' => 'group_kinis_global',
    'title' => 'Kinis - Thông tin chung',
    'fields' => array(
        array('key' => 'field_global_phone', 'label' => 'Số điện thoại', 'name' => 'kinis_phone', 'type' => 'text', 'default_value' => '(+84) 708 803 573'),
        array('key' => 'field_global_email', 'label' => 'Email', 'name' => 'kinis_email', 'type' => 'text', 'default_value' => 'hello@kinis.com'),
        array('key' => 'field_global_zalo', 'label' => 'Link Zalo', 'name' => 'kinis_zalo', 'type' => 'url', 'default_value' => ''),
        array('key' => 'field_global_fb', 'label' => 'Link Facebook', 'name' => 'kinis_facebook', 'type' => 'url', 'default_value' => ''),
    ),
    'location' => array(array(array('param' => 'options_page', 'operator' => '==', 'value' => 'kinis-settings'))),
));

// Add options page for global settings (requires ACF Pro for options page)
// For free ACF: global fields will be on each page
