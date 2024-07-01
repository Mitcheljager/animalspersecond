<script lang="ts">
  import type { Snippet } from "svelte"
  import RollingNumber from "./RollingNumber.svelte"
	import { secondsToWords } from "$lib/utils/time"
	import { secondsSinceArrival } from "$lib/stores/time"

  interface Props {
    number: string,
		subtitle: Snippet,
    children?: Snippet
  }

  const { number, subtitle, children } : Props = $props()
</script>

<header>
	<h1><RollingNumber {number} /></h1>
	<h2>{@render subtitle()}</h2>
	<p><em>That was {secondsToWords($secondsSinceArrival)}</em></p>

	{#if children}
		{@render children()}
	{/if}
</header>

<style lang="scss">
  header {
		margin: 0 0 $layout-offset;
		color: $yellow;
	}

	h1 {
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

		// This needs to be applied to the text element itself, rather than the parent, as it might otherwise not show in Chrome
		:global(.wrapper),
		:global(.digit) {
			@include text-gradient($gradient-yellow);
		}
  }

	h2 {
		@include text-gradient($gradient-yellow);
		margin: 0.75rem 0 0;
		font-size: clamp(21px, 4vw, 28px);
		font-weight: bold;
		color: $yellow;
		font-family: $font-family-brand;
		letter-spacing: 2px;
		font-weight: normal;
		font-size: clamp(21px, 5vw, 24px);
	}

	p {
		margin: 1rem 0 0;
		font-size: 16px;
		line-height: 1.35em;
	}
</style>
