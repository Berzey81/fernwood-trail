<?php

// Theme setup
function fernwood_trail_setup() {
    add_theme_support( 'title-tag' );
}

add_action( 'after_setup_theme', 'fernwood_trail_setup' );

// Load the theme stylesheet
function fernwood_trail_enqueue_styles() {
    wp_enqueue_style( 'fernwood-trail-style', get_stylesheet_uri() );
}

add_action( 'wp_enqueue_scripts', 'fernwood_trail_enqueue_styles' );

// Register navigation menu
function fernwood_trail_register_menus() {
    register_nav_menus(
        array(
            'primary' => 'Primary Menu',
        )
    );
}

add_action( 'after_setup_theme', 'fernwood_trail_register_menus' );

//Register the Stat Callout block
function fernwood_trail_register_stat_callout_block() {
    register_block_type( get_template_directory() . '/build/blocks/stat-callout' );
}

add_action( 'init', 'fernwood_trail_register_stat_callout_block' );