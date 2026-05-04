<?php
/*
Template Name: Coming Soon
*/
?>
<?php get_header(); ?>

<div style="display:flex;min-height:100vh;align-items:center;justify-content:center;background-color:#f5f5f5;font-family:'Manrope',sans-serif;">
  <div style="text-align:center;padding:0 1.5rem;">
    <h1 style="font-family:'Phudu',sans-serif;font-size:3rem;font-weight:700;margin-bottom:1rem;color:#1a1a1a;">Sắp ra mắt</h1>
    <p style="font-size:1.125rem;margin-bottom:2rem;color:#737373;line-height:1.7;">
      Trang này đang được <span style="color:#FF760C;font-weight:600;">Kinis</span> xây dựng.<br>Quay lại sau nhé!
    </p>
    <a href="<?php echo home_url('/'); ?>" style="display:inline-flex;align-items:center;gap:0.5rem;font-family:'Manrope',sans-serif;font-weight:600;font-size:0.875rem;padding:0.75rem 1.5rem;border-radius:9999px;background-color:#FF760C;color:#fff;text-decoration:none;">
      Về trang chủ
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
    </a>
  </div>
</div>

<?php get_footer(); ?>
