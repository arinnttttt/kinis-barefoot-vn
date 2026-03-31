#!/usr/bin/env python3
"""Post-process front-page.php to inject dynamic Testimonial + FAQ sections."""
import sys, os, re

fp_path = os.path.join(os.path.dirname(__file__), '..', 'wp-theme', 'kinis', 'front-page.php')
fp = open(fp_path, 'rb').read().decode('utf-8')

def find_section(content, marker):
    idx = content.find(marker)
    if idx == -1:
        return None, None, None
    start = content.rfind('<section', 0, idx)
    depth = 0
    i = start
    while i < len(content):
        if content[i:i+8] == '<section':
            depth += 1; i += 8
        elif content[i:i+10] == '</section>':
            depth -= 1
            if depth == 0:
                return start, i + 10, content[start:i+10]
            i += 10
        else:
            i += 1
    return start, len(content), content[start:]

# ===== TESTIMONIAL =====
t_start, t_end, orig_testimonial = find_section(fp, 'aria-labelledby="testimonial-heading"')
if t_start is not None:
    dynamic_testimonial = '''<?php
$testimonials = get_posts(array('post_type'=>'kinis_testimonial','post_status'=>'publish','posts_per_page'=>10,'orderby'=>'menu_order','order'=>'ASC'));
if (!empty($testimonials)) : ?>
<section class="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="testimonial-heading" style="background-color: rgb(245, 245, 245);"><div class="max-w-7xl mx-auto"><div class="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8 lg:mb-10 gap-4"><div><h2 id="testimonial-heading" class="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight mb-2 sm:mb-3" style="color: rgb(26, 26, 26);">Ph\u1EA3n h\u1ED3i ch\u00E2n th\u1EF1c t\u1EEB <span style="color: rgb(255, 120, 10);">kh\u00E1ch h\u00E0ng</span></h2><p class="text-sm sm:text-base lg:text-lg leading-relaxed" style="color: rgb(128, 128, 128);">\u0110\u00E1nh gi\u00E1 ch\u00E2n th\u1EF1c t\u1EEB nh\u1EEFng ng\u01B0\u1EDDi \u0111\u00E3 tr\u1EA3i nghi\u1EC7m gi\u00E0y Kinis</p></div><div class="flex items-center gap-2"><button aria-label="Previous" class="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors" style="background-color: hsl(0,0%,85%); color: rgb(255,255,255); opacity:0.5;" disabled><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 sm:w-5 sm:h-5"><path d="m15 18-6-6 6-6"></path></svg></button><button aria-label="Next" class="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors" style="background-color: hsl(0,0%,10%); color: rgb(255,255,255);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 sm:w-5 sm:h-5"><path d="m9 18 6-6-6-6"></path></svg></button></div></div><div class="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4" style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;"><div class="flex gap-4 items-stretch"><?php foreach ($testimonials as $t_post) :
    $t_name = esc_html($t_post->post_title);
    $t_review = esc_html(wp_strip_all_tags($t_post->post_content));
    $t_stars = intval(get_post_meta($t_post->ID, '_kinis_testimonial_stars', true) ?: 5);
    $t_category = esc_html(get_post_meta($t_post->ID, '_kinis_testimonial_category', true) ?: '');
    $t_initial = mb_substr($t_name, 0, 1);
    $star_filled = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" class="w-4 h-4" style="color:rgb(255,120,10);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
    $star_empty = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" style="color:rgb(220,220,220);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
?><div class="flex-shrink-0 w-[280px] md:w-[350px]" style="scroll-snap-align: start;"><div class="p-5 sm:p-6 rounded-2xl h-full flex flex-col" style="background-color: rgb(255,255,255); border: 1px solid rgb(229,229,229); box-shadow: rgba(0,0,0,0.04) 0px 2px 8px;"><div class="flex items-center justify-between mb-3"><div class="flex gap-0.5"><?php for ($s=0; $s<5; $s++) echo $s < $t_stars ? $star_filled : $star_empty; ?></div><?php if ($t_category) : ?><span class="px-2.5 py-1 rounded-full text-xs font-medium" style="background-color:rgb(245,245,245);color:rgb(115,115,115);"><?php echo $t_category; ?></span><?php endif; ?></div><p class="text-sm sm:text-[15px] leading-relaxed flex-1" style="color: rgb(82,82,82);"><?php echo $t_review; ?></p><div class="flex items-center gap-3 pt-3" style="border-top: 1px solid rgb(237,237,237);"><div class="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm" style="background-color:rgb(26,26,26);color:rgb(255,255,255);"><?php echo $t_initial; ?></div><span class="font-body font-semibold text-sm" style="color: rgb(38,38,38);"><?php echo $t_name; ?></span></div></div></div><?php endforeach; ?></div></div></div></section>
<?php else : ?>
''' + orig_testimonial + '''
<?php endif; ?>'''
    fp = fp[:t_start] + dynamic_testimonial + fp[t_end:]
    print("✅ Testimonial section replaced with dynamic PHP")
else:
    print("⚠ Testimonial section not found")

# ===== FAQ =====
f_start, f_end, orig_faq = find_section(fp, 'aria-labelledby="home-faq-heading"')
if f_start is not None:
    dynamic_faq = '''<?php
$home_faqs = get_posts(array('post_type'=>'faq','post_status'=>'publish','meta_key'=>'_kinis_show_on_home','meta_value'=>'1','posts_per_page'=>8,'orderby'=>'menu_order','order'=>'ASC'));
if (!empty($home_faqs)) : ?>
<section class="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="home-faq-heading" style="background-color: rgb(255, 255, 255);"><div class="max-w-4xl mx-auto"><div class="text-center mb-8 sm:mb-10 lg:mb-12"><h2 id="home-faq-heading" class="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight mb-3" style="color: rgb(26, 26, 26);">C\u00E2u h\u1ECFi <span style="color: rgb(255, 120, 10);">th\u01B0\u1EDDng g\u1EB7p</span></h2><p class="text-sm sm:text-base lg:text-lg leading-relaxed" style="color: rgb(128, 128, 128);">Gi\u1EA3i \u0111\u00E1p nhanh nh\u1EEFng th\u1EAFc m\u1EAFc ph\u1ED5 bi\u1EBFn nh\u1EA5t v\u1EC1 gi\u00E0y barefoot Kinis</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12"><?php
$faq_items = array();
foreach ($home_faqs as $faq_post) { $faq_items[] = array('q' => esc_html($faq_post->post_title), 'a' => wp_strip_all_tags($faq_post->post_content)); }
$half = ceil(count($faq_items) / 2);
$columns = array(array_slice($faq_items, 0, $half), array_slice($faq_items, $half));
foreach ($columns as $col) : ?><div><?php foreach ($col as $item) : ?><div class="border-b transition-colors" style="border-color: rgb(230, 230, 230);"><button class="w-full flex items-center justify-between py-4 sm:py-5 text-left gap-4 group"><span class="font-body text-sm sm:text-base font-semibold leading-snug" style="color: rgb(38, 38, 38);"><?php echo $item['q']; ?></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300" style="color: rgb(115, 115, 115);"><path d="m6 9 6 6 6-6"></path></svg></button><div class="overflow-hidden transition-all duration-300" style="max-height: 0px; opacity: 0;"><p class="pb-4 sm:pb-5 text-sm sm:text-[15px] leading-relaxed pr-8" style="color: rgb(115, 115, 115);"><?php echo $item['a']; ?></p></div></div><?php endforeach; ?></div><?php endforeach; ?></div><div class="text-center mt-8 sm:mt-10"><a onclick="window.scrollTo(0,0)" class="btn-primary-orange inline-flex items-center gap-2 font-body font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-colors" href="<?php echo home_url('/faq/'); ?>" style="background-color: rgb(255, 120, 10); color: rgb(255, 255, 255);">Xem t\u1EA5t c\u1EA3 c\u00E2u h\u1ECFi<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div></div></section>
<?php else : ?>
''' + orig_faq + '''
<?php endif; ?>'''
    fp = fp[:f_start] + dynamic_faq + fp[f_end:]
    print("✅ FAQ section replaced with dynamic PHP")
else:
    print("⚠ FAQ section not found")

open(fp_path, 'wb').write(fp.encode('utf-8'))
print("✅ front-page.php post-processed successfully")
