<script>
	import "$lib/scss/app.scss"
</script>

<div class="layout">
	<slot />
</div>

<style lang="scss">
	.layout {
		position: relative;
		max-width: 800px;
		margin: clamp(5rem, 20vw, 10rem) auto;
		padding: 2rem;
	}
</style>
