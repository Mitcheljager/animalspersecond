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
		margin: 3rem auto $layout-offset;
		padding: 0 2rem;
	}

	.logo {
		display: inline-block;
		margin-bottom: $layout-offset;
		font-family: $font-family-brand;
		color: $yellow;
		font-size: 21px;
		text-decoration: none;
		box-shadow: 0 3px 0 currentColor;

		&:hover {
			color: white;
		}
	}
</style>
