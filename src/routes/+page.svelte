<script lang="ts">
	import type { Animal } from "$lib/types/Animal.d.ts"
	import { Data } from "$lib/data/Data"
	import { secondsSinceArrival } from "$lib/stores/time"
	import { numbersSinceArrival } from "$lib/stores/data"
	import { secondsToWords } from "$lib/utils/time"
	import AnimalCounter from "./AnimalCounter.svelte"
	import Header from "./Header.svelte"

	const animals: Array<Animal> = sortAnimals()

	const sum: number = $derived(Math.floor($numbersSinceArrival.reduce((a, b) => a + b, 0)))

	function sortAnimals(): Array<Animal> {
		return Object.values(Data).sort((a, b) => b.annually - a.annually)
	}
</script>

<svelte:head>
	<title>Animals per second | Keeping track of animals killed every second</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header number={sum.toLocaleString()}>
	{#snippet subtitle()}That's the number of animals that were killed globally since you opened this website.{/snippet}
	<p><em>That was {secondsToWords($secondsSinceArrival)}</em></p>
</Header>

<div class="animals">
	{#each animals as animal, index}
		<AnimalCounter {index} {...animal} />
	{/each}
</div>

<p class="many-more">And so many others...</p>

<div>
	<h2 class="statement">Let's be better.</h2>
</div>

<style lang="scss">
	p {
		margin: 0.75rem 0 0;
	}

	.animals {
		display: grid;
		gap: 1rem;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.many-more {
		display: inline-block;
		margin: 1rem 0 0;
		font-family: $font-family-brand;
		font-size: clamp(18px, 4vw, 19px);
		color: $yellow;
	}

	.statement {
		display: inline-block;
		margin: $layout-offset 0 0;
		box-shadow: 0 0.2rem $yellow;
	}
</style>
