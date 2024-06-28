<script lang="ts">
  import type { Snippet } from "svelte"
  import RollingNumber from "./RollingNumber.svelte"

  interface Props {
    number: string
    children: Snippet
  }

  const { number, children } : Props = $props()
</script>

<header>
	<h1><RollingNumber {number} /></h1>
	{@render children()}
</header>

<style lang="scss">
  header {
		margin: 0 0 clamp(5rem, 20vw, 10rem);
		color: $yellow;
	}

	h1 {
		@include text-gradient($gradient-yellow);
    --rolling-number-font-size: 1em;
		position: relative;
		display: inline;
		margin: 0;
		font-size: clamp(36px, 12vw, 120px);
		font-family: $font-family-brand;
		font-weight: bold;
    text-transform: uppercase;

		&::before {
			content: "";
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			border-radius: 1rem;
			height: clamp(0.25rem, 1vw, 1rem);
			background: $gradient-yellow;
		}
  }
</style>
