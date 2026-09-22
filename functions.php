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