<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$stats = $attributes['stats'] ?? [];
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php foreach ( $stats as $stat ) : ?>
		<div class="stat-callout__item">
			<strong class="stat-callout__number">
				<?php echo esc_html( $stat['number'] ?? '' ); ?>
			</strong>

			<span class="stat-callout__label">
				<?php echo esc_html( $stat['label'] ?? '' ); ?>
			</span>
		</div>
	<?php endforeach; ?>
</div>