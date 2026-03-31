<?php
/*
Template Name: FAQ
*/
?>
<?php get_header(); ?>

<?php
// Hero text from ACF or defaults
$hero_title = function_exists('get_field') ? get_field('hero_title') : '';
$hero_subtitle = function_exists('get_field') ? get_field('hero_subtitle') : '';
if (!$hero_title) $hero_title = 'Câu hỏi thường gặp';
if (!$hero_subtitle) $hero_subtitle = 'Những thắc mắc phổ biến về giày barefoot và sản phẩm Kinis.';

// Build FAQ data from Custom Post Type
$faq_categories = array();
$terms = get_terms(array('taxonomy' => 'faq_category', 'hide_empty' => true, 'orderby' => 'name'));
if (!is_wp_error($terms) && !empty($terms)) {
    foreach ($terms as $term) {
        $faqs = get_posts(array(
            'post_type'      => 'faq',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'tax_query'      => array(array('taxonomy' => 'faq_category', 'field' => 'term_id', 'terms' => $term->term_id)),
        ));
        if (!empty($faqs)) {
            $questions = array();
            foreach ($faqs as $faq_post) {
                $questions[] = array(
                    'question' => $faq_post->post_title,
                    'answer'   => apply_filters('the_content', $faq_post->post_content),
                );
            }
            $faq_categories[] = array('category_name' => $term->name, 'questions' => $questions);
        }
    }
}

// Also check ACF repeater as fallback
if (empty($faq_categories) && function_exists('get_field')) {
    $acf_cats = get_field('faq_categories');
    if ($acf_cats && is_array($acf_cats) && count($acf_cats) > 0) {
        $faq_categories = $acf_cats;
    }
}

if (!empty($faq_categories)) :
  // Helper to create slug from Vietnamese text
  function kinis_to_slug($text) {
    $text = mb_strtolower($text, 'UTF-8');
    $text = preg_replace('/[^a-z0-9\s-]/u', '', $text);
    $text = preg_replace('/[\s-]+/', '-', $text);
    return trim($text, '-');
  }
?>
<!-- Dynamic FAQ from ACF -->

<div id="root"><div class="min-h-screen flex flex-col">
<!-- Header will be from static content -->


<!-- Hero section -->
<section class="relative overflow-hidden" style="background-color: hsl(0, 0%, 7%);">
  <div class="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24" style="padding-top:140px">
    <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-tight" style="color: white;">
      <?php echo esc_html($hero_title); ?>
    </h1>
    <p class="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed" style="color: rgba(255,255,255,0.7);">
      <?php echo esc_html($hero_subtitle); ?>
    </p>
  </div>
</section>

<!-- Category nav (mobile) -->
<div class="faq-mobile-nav sticky top-16 z-20 border-b" style="background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); border-color: hsl(0,0%,90%);">
  <div class="mx-auto max-w-6xl overflow-x-auto">
    <div class="flex min-w-max gap-2 px-3 py-3 sm:px-4">
      <?php foreach ($faq_categories as $cat) : $slug = kinis_to_slug($cat['category_name']); ?>
        <a href="#<?php echo esc_attr($slug); ?>" class="shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors" style="border-color: hsl(0,0%,85%); color: hsl(0,0%,45%); background: white;">
          <?php echo esc_html($cat['category_name']); ?>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</div>

<!-- FAQ Content -->
<section style="background-color: hsl(0,0%,96%);" class="px-3 py-10 sm:px-6 sm:py-12 md:py-16">
  <div class="mx-auto max-w-6xl lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
    
    <!-- Desktop Sidebar -->
    <aside class="faq-desktop-sidebar">
      <div class="sticky top-28 rounded-2xl p-4" style="background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <p class="px-3 pb-3 text-xs font-semibold uppercase tracking-widest" style="color: hsl(0,0%,45%);">Danh mục FAQ</p>
        <div class="space-y-1">
          <?php foreach ($faq_categories as $cat) : $slug = kinis_to_slug($cat['category_name']); ?>
            <a href="#<?php echo esc_attr($slug); ?>" class="block rounded-xl px-3 py-3 text-sm leading-6 transition-colors" style="color: hsl(0,0%,45%);">
              <?php echo esc_html($cat['category_name']); ?>
            </a>
          <?php endforeach; ?>
        </div>
      </div>
    </aside>

    <!-- FAQ Items -->
    <div class="space-y-10 sm:space-y-12">
      <?php foreach ($faq_categories as $cat_index => $cat) : $slug = kinis_to_slug($cat['category_name']); ?>
        <section id="<?php echo esc_attr($slug); ?>" class="scroll-mt-28">
          <div class="border-b pb-3 sm:pb-4" style="border-color: hsl(0,0%,85%);">
            <h2 class="text-balance break-words font-display text-xl font-semibold uppercase leading-tight sm:text-2xl" style="color: hsl(0,0%,10%);">
              <?php echo esc_html($cat['category_name']); ?>
            </h2>
          </div>
          <div class="mt-4 space-y-3 sm:mt-5">
            <?php if (!empty($cat['questions'])) : foreach ($cat['questions'] as $q_index => $faq) : $faq_id = $slug . '-faq-' . $q_index; ?>
              <div class="faq-item overflow-hidden rounded-2xl" style="background: white;">
                <input id="<?php echo esc_attr($faq_id); ?>" type="checkbox" class="faq-toggle-input" />
                <label for="<?php echo esc_attr($faq_id); ?>" class="faq-question">
                  <span class="faq-summary-text"><?php echo esc_html($faq['question']); ?></span>
                  <span class="faq-toggle-glyph" aria-hidden="true"></span>
                </label>
                <div class="faq-answer">
                  <?php echo wp_kses_post($faq['answer']); ?>
                </div>
              </div>
            <?php endforeach; endif; ?>
          </div>
        </section>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Footer from static -->

</div></div>

<?php else : ?>
<!-- Fallback: static pre-rendered FAQ -->
Not found
<?php endif; ?>
<?php get_footer(); ?>
