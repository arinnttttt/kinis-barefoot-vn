<?php
/*
Template Name: Câu chuyện
*/
?>
<?php get_header(); ?>

<?php ob_start(); ?>

    <section class="relative overflow-hidden" style="background-color: rgb(0, 0, 0);"><div class="absolute inset-0"><img loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/images/story-DHbzQEbT.jpg" alt="" class="w-full h-full object-cover opacity-30"><div class="absolute inset-0" style="background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));"></div></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pb-16 md:pb-20" style="padding-top:120px"><h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up" style="color: rgb(255, 255, 255);">Câu chuyện của chúng tôi</h1><p class="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl max-w-2xl animate-fade-up [animation-delay:100ms]" style="color: rgba(255, 255, 255, 0.7);">Từ ý tưởng đến sản phẩm — hành trình nâng niu bàn chân Việt</p></div></section><section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background"><div class="max-w-4xl mx-auto"><p class="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 sm:mb-16 animate-fade-in">Kinis ra đời từ một câu hỏi đơn giản: "Tại sao chúng ta đầu tư vào giày nhưng lại quên đi phần quan trọng nhất — lót giày?" Chúng tôi tin rằng một đôi lót giày tốt có thể thay đổi cách bạn vận động, tập luyện và sinh hoạt hàng ngày.</p><div class="space-y-8 sm:space-y-12"><div class="flex gap-4 sm:gap-6 animate-fade-up" style="animation-delay: 0ms;"><div class="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary/10 flex items-center justify-center"><span class="font-display text-lg sm:text-xl font-bold text-secondary">2022</span></div><div><h3 class="font-display text-lg sm:text-xl font-semibold text-foreground">Ý tưởng ra đời</h3><p class="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">Xuất phát từ nỗi đau chân khi luyện tập, nhóm sáng lập quyết định tạo ra giải pháp lót giày khoa học.</p></div></div><div class="flex gap-4 sm:gap-6 animate-fade-up" style="animation-delay: 100ms;"><div class="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary/10 flex items-center justify-center"><span class="font-display text-lg sm:text-xl font-bold text-secondary">2023</span></div><div><h3 class="font-display text-lg sm:text-xl font-semibold text-foreground">Nghiên cứu &amp; Phát triển</h3><p class="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">Hợp tác với các chuyên gia sinh cơ học để thiết kế cấu trúc lót giày tối ưu.</p></div></div><div class="flex gap-4 sm:gap-6 animate-fade-up" style="animation-delay: 200ms;"><div class="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary/10 flex items-center justify-center"><span class="font-display text-lg sm:text-xl font-bold text-secondary">2024</span></div><div><h3 class="font-display text-lg sm:text-xl font-semibold text-foreground">Ra mắt Kinis Lucy</h3><p class="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">Sản phẩm đầu tiên được giới thiệu, nhận phản hồi tích cực từ cộng đồng thể thao.</p></div></div><div class="flex gap-4 sm:gap-6 animate-fade-up" style="animation-delay: 300ms;"><div class="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary/10 flex items-center justify-center"><span class="font-display text-lg sm:text-xl font-bold text-secondary">2025</span></div><div><h3 class="font-display text-lg sm:text-xl font-semibold text-foreground">Kinis Nomad</h3><p class="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">Mở rộng dòng sản phẩm với Kinis Nomad dành cho dân phiêu lưu.</p></div></div></div></div></section>
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
