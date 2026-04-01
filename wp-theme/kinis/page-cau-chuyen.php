<?php
/*
Template Name: Câu chuyện
*/
?>
<?php get_header(); ?>

<?php ob_start(); ?>
Not found
<?php
$kinis_content = ob_get_clean();
$kinis_replacements = array(
        'Câu chuyện của chúng tôi' => 'hero_title',
        'Từ ý tưởng đến sản phẩm — hành trình nâng niu bàn chân Việt' => 'hero_subtitle',
        'Ý tưởng ra đời' => 'timeline_1_title',
        'Xuất phát từ nỗi đau chân khi luyện tập, nhóm sáng lập quyết định tạo ra giải pháp lót giày khoa học.' => 'timeline_1_desc',
        'Nghiên cứu &amp; Phát triển' => 'timeline_2_title',
        'Hợp tác với các chuyên gia sinh cơ học để thiết kế cấu trúc lót giày tối ưu.' => 'timeline_2_desc',
        'Ra mắt Kinis Lucy' => 'timeline_3_title',
        'Sản phẩm đầu tiên được giới thiệu, nhận phản hồi tích cực từ cộng đồng thể thao.' => 'timeline_3_desc',
);
echo kinis_replace_content($kinis_content, $kinis_replacements);
?>
<?php get_footer(); ?>
