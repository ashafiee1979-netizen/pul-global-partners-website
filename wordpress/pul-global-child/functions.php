<?php
/**
 * PUL Global Partners child theme foundation.
 */

if (! defined('ABSPATH')) {
    exit;
}

function pul_global_enqueue_assets(): void {
    $version = wp_get_theme()->get('Version');
    wp_enqueue_style('pul-global-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,600&display=swap', [], null);
    wp_enqueue_style('pul-global-child', get_stylesheet_uri(), [], $version);
    wp_enqueue_script('lucide', 'https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js', [], '0.468.0', true);
    wp_enqueue_script('pul-global-site', get_stylesheet_directory_uri() . '/assets/site.js', ['lucide'], $version, true);
}
add_action('wp_enqueue_scripts', 'pul_global_enqueue_assets', 20);

function pul_global_theme_support(): void {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
}
add_action('after_setup_theme', 'pul_global_theme_support');
