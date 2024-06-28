<script>
	import "$lib/scss/app.scss"
	import Sources from "./Sources.svelte"
</script>

<div class="layout">
	<a href="/" class="logo">Animals per second</a>

	<slot />

	<Sources />
</div>

<style lang="scss">
	.layout {
		position: relative;
		max-width: 800px;
		margin: clamp(1rem, 5vw, 3rem) auto $layout-offset;
		padding: 0 1rem;
	}

	.logo {
		$shadow: -0.25rem 3px 2px rgba($black, 0.05), -0.25rem 10px 5px rgba($black, 0.05), -0.25rem 15px 10px rgba($black, 0.05), -0.25rem 25px 15px rgba($black, 0.1), -0.25rem 40px 30px rgba($black, 0.1);
		@include text-gradient($gradient-yellow);
		display: inline-block;
		margin-bottom: $layout-offset;
		font-family: $font-family-brand;
		font-size: 21px;
		text-decoration: none;
		box-shadow: 0 3px 0 $yellow, $shadow;
		text-shadow: $shadow;
		text-transform: lowercase;

		&:hover {
			color: white;

		}
	}
</style>
