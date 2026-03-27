<?php get_header(); ?>
<div style="max-width:800px;margin:0 auto;padding:80px 20px;font-family:'Manrope',sans-serif;">
  <h1 style="font-family:'Phudu',sans-serif;font-size:2rem;margin-bottom:1rem;"><?php the_title(); ?></h1>
  <?php while (have_posts()) : the_post(); ?>
    <?php the_content(); ?>
  <?php endwhile; ?>
</div>
<?php get_footer(); ?>
