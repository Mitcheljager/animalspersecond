<script>
	import { browser } from "$app/environment"
	import { afterNavigate } from "$app/navigation"
	import "$lib/scss/app.scss"

	afterNavigate(({ from }) => {
		if (browser && from) document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 20%, 12%)`
	})
</script>

<div class="layout">
	<a href="/" class="logo">Animals per second</a>

	<slot />

	<footer>
		Contribute on
		<a href="https://github.com/Mitcheljager/animalspersecond/" target="_blank" rel="noreferrer noopener">GitHub</a>
	</footer>
</div>

<style lang="scss">
	.layout {
		position: relative;
		max-width: 800px;
		margin: clamp(1rem, 5vw, 3rem) auto $layout-offset;
		padding: 0 1rem;
	}

	.logo {
		@include text-gradient($gradient-yellow);
		display: inline-block;
		margin-bottom: $layout-offset;
		box-shadow: 0 3px 0 $yellow;
		filter:
			drop-shadow(-0.25rem 3px 2px rgba($black, 0.15))
			drop-shadow(-0.5rem 10px 5px rgba($black, 0.15))
			drop-shadow(-0.75rem 15px 10px rgba($black, 0.15))
			drop-shadow(-1rem 25px 15px rgba($black, 0.3))
			drop-shadow(-1.25rem 40px 30px rgba($black, 0.3));
		text-transform: lowercase;
		font-family: $font-family-brand;
		font-size: 21px;
		text-decoration: none;

		&:hover {
			color: $white;
		}
	}

	footer {
		margin-top: 5rem;
		font-size: 14px;

		a {
			color: $yellow;
			text-decoration: none;

			&:hover {
				color: $white;
				text-decoration: underline;
			}
		}
	}
</style>
