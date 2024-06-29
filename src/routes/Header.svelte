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
		margin: 0 0 $layout-offset;
		color: $yellow;
    filter:
      drop-shadow(-0.5rem 3px 2px rgba($black, 0.1))
      drop-shadow(-1rem 10px 5px rgba($black, 0.1))
      drop-shadow(-1.5rem 15px 10px rgba($black, 0.1))
      drop-shadow(-2rem 25px 15px rgba($black, 0.2))
      drop-shadow(-2.5rem 40px 30px rgba($black, 0.2))
      drop-shadow(-3rem 100px 75px rgba($black, 0.3));

		:global(h2) {
			margin: 2rem 0 0;
			font-size: clamp(21px, 5vw, 24px);
		}

		:global(p) {
			margin: 1rem 0;
		}
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
