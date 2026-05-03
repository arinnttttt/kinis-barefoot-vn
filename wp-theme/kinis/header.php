<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Mobile menu panel -->
<div id="kinis-mobile-menu" class="lg:hidden fixed inset-0 z-[9998]" style="top:64px;background-color:#000000;opacity:0;visibility:hidden;pointer-events:none;transition:opacity 0.3s ease,visibility 0.3s ease;">
  <div class="h-full overflow-y-auto px-4 sm:px-6 py-6 space-y-1">
    <?php if (has_nav_menu('primary')) : ?>
      <?php wp_nav_menu(array(
        'theme_location' => 'primary',
        'container'      => false,
        'items_wrap'     => '%3$s',
        'walker'         => new Kinis_Mobile_Nav_Walker(),
        'depth'          => 2,
      )); ?>
    <?php else : ?>
      <a href="<?php echo home_url('/'); ?>" class="kinis-mobile-link block px-4 py-3.5 text-base font-medium rounded-xl" style="color:hsl(27,100%,52%);">Trang chủ</a>
      <a href="<?php echo home_url('/cau-chuyen/'); ?>" class="kinis-mobile-link block px-4 py-3.5 text-base font-medium rounded-xl" style="color:rgba(255,255,255,0.7);">Câu chuyện</a>
      <details class="group">
        <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl [&::-webkit-details-marker]:hidden" style="color:rgba(255,255,255,0.7);">Sản phẩm<svg class="w-5 h-5 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></summary>
        <div class="pl-4 pb-2 space-y-0.5">
          <a href="<?php echo home_url('/san-pham-lucy/'); ?>" class="kinis-mobile-link block px-4 py-3 text-base rounded-xl" style="color:rgba(255,255,255,0.5);">Kinis Lucy</a>
          <a href="<?php echo home_url('/san-pham-nomad/'); ?>" class="kinis-mobile-link block px-4 py-3 text-base rounded-xl" style="color:rgba(255,255,255,0.5);">Kinis Nomad</a>
        </div>
      </details>
      <a href="<?php echo home_url('/khoa-hoc/'); ?>" class="kinis-mobile-link block px-4 py-3.5 text-base font-medium rounded-xl" style="color:rgba(255,255,255,0.7);">Khoa học</a>
      <details class="group">
        <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl [&::-webkit-details-marker]:hidden" style="color:rgba(255,255,255,0.7);">Đối tượng phù hợp<svg class="w-5 h-5 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></summary>
        <div class="pl-4 pb-2 space-y-0.5">
          <a href="<?php echo home_url('/doi-tuong-gym/'); ?>" class="kinis-mobile-link block px-4 py-3 text-base rounded-xl" style="color:rgba(255,255,255,0.5);">Gym & Fitness</a>
          <a href="<?php echo home_url('/doi-tuong-chay-bo/'); ?>" class="kinis-mobile-link block px-4 py-3 text-base rounded-xl" style="color:rgba(255,255,255,0.5);">Chạy bộ</a>
          <a href="<?php echo home_url('/doi-tuong-ban-chan-bet/'); ?>" class="kinis-mobile-link block px-4 py-3 text-base rounded-xl" style="color:rgba(255,255,255,0.5);">Bàn chân bẹt</a>
        </div>
      </details>
      <a href="<?php echo home_url('/faq/'); ?>" class="kinis-mobile-link block px-4 py-3.5 text-base font-medium rounded-xl" style="color:rgba(255,255,255,0.7);">FAQ</a>
    <?php endif; ?>
    <div class="pt-6 mt-6" style="border-top:1px solid rgba(255,255,255,0.1);">
      <a href="tel:+84708803573" class="block px-4 py-3 text-base" style="color:rgba(255,255,255,0.5);">(+84) 708 803 573</a>
      <a href="mailto:hello@kinis.com" class="block px-4 py-3 text-base" style="color:rgba(255,255,255,0.5);">hello@kinis.com</a>
    </div>
  </div>
</div>
