<?php get_header(); ?>

<?php ob_start(); ?>
Not found
<?php
$kinis_content = ob_get_clean();
$kinis_replacements = array(
        'bàn chân Việt' => 'hero_title',
        'Khôi phục cơ chế sinh học và vận động tự nhiên của bàn chân' => 'hero_subtitle',
        'Tìm hiểu giày Kinis' => 'hero_cta1',
        'Thông tin khoa học' => 'hero_cta2',
        'Sản phẩm giày Kinis' => 'section_product_title',
        'Đánh thức' => 'section_awaken_1',
        'sức mạnh bản năng' => 'section_awaken_2',
        'của bàn chân' => 'section_awaken_3',
);
echo kinis_replace_content($kinis_content, $kinis_replacements);
?>
<?php get_footer(); ?>
