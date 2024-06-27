<script lang="ts">
	import type { Animal } from "$lib/types/Animal"
	import { Data } from "$lib/data/Data"
	import { secondsSinceArrival } from "$lib/stores/time"
	import { numbersSinceArrival } from "$lib/stores/data"
	import { secondsToWords } from "$lib/utils/time"
	import AnimalCounter from "./AnimalCounter.svelte"
	import RollingNumber from "./RollingNumber.svelte"

	const animals: Array<Animal> = sortAnimals()

	const sum: number = $derived(Math.floor($numbersSinceArrival.reduce((a, b) => a + b, 0)))

	function sortAnimals(): Array<Animal> {
		return Object.values(Data).sort((a, b) => b.annually - a.annually)
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header>
	<h1><RollingNumber number={sum.toLocaleString()} /></h1>
	<h2>That's the number of animals that were killed globally since you opened this page.</h2>
	<p><em>That was {secondsToWords($secondsSinceArrival)}</em></p>
</header>

<div class="animals">
	{#each animals as animal, index}
		<AnimalCounter {index} {...animal} />
	{/each}
</div>

<h2 class="statement">Let's be better.</h2>

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
		font-size: clamp(36px, 7.5vw, 120px);
		font-family: $font-family-brand;
		font-weight: bold;

		&::before {
			content: "";
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1rem;
			background: $gradient-yellow;
		}
  }

	h2 {
		@include text-gradient($gradient-yellow);
		margin: 0.75rem 0 0;
		font-size: clamp(21px, 7.5vw, 28px);
		font-weight: bold;
		color: $yellow;
		font-family: $font-family-brand;
		letter-spacing: 2px;
  }

	p {
		margin: 0.75rem 0 0;
	}

	.animals {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
	}

	.statement {
		display: inline-block;
		margin: clamp(5rem, 20vw, 10rem) 0 0;
		box-shadow: 0 0.2rem $yellow;
	}
</style>
