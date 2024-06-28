<script>
	import "$lib/scss/app.scss"
	import Sources from "./Sources.svelte"
</script>

<div class="layout">
	<slot />

	<Sources />
</div>

<style lang="scss">
	.layout {
		position: relative;
		max-width: 800px;
		margin: clamp(5rem, 20vw, 10rem) auto;
		padding: 2rem;
	}
</style>
