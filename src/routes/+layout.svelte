<script>
	import { browser } from "$app/environment"
	import { afterNavigate } from "$app/navigation"
	import Sources from "./Sources.svelte"
	import "$lib/scss/app.scss"

	afterNavigate(({ to, from }) => {
		if (browser && from) document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 20%, 12%)`
	})
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
		$shadow: -0.25rem 3px 2px rgba($black, 0.05), -0.5rem 10px 5px rgba($black, 0.05), -0.75rem 15px 10px rgba($black, 0.05), -1rem 25px 15px rgba($black, 0.1), -1.25rem 40px 30px rgba($black, 0.1);
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
