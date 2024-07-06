<script lang="ts">
	import type { Animal } from "$lib/types/Animal.d.ts"
	import { bigNumberToWords } from "$lib/utils/number"
	import { Category } from "$lib/data/Category"
	import AnimalCounter from "./AnimalCounter.svelte"
	import Header from "./Header.svelte"
	import Sources from "./Sources.svelte"
	import { annuallyToSecondly } from "$lib/utils/time"
	import { secondsSinceArrival } from "$lib/stores/time"

	const { data } = $props()

	const animals: Animal[] = sortAnimals(data.animals)

	const numbersSinceArrival: number[] = $derived(animals.filter(a => a.category === Category.Land).map(i => annuallyToSecondly(i.annually) * $secondsSinceArrival))
	const sum: number = $derived(Math.floor(numbersSinceArrival.reduce((a, b) => a + b, 0)))
	const annualSum: number = animals.filter(a => a.category === Category.Land).reduce((a, b) => a + b.annually, 0)

	function sortAnimals(data: Animal[]): Animal[] {
		return data.sort((a, b) => b.annually - a.annually)
	}

	function filterAnimalByCategory(category: string): Animal[] {
		return animals.filter(a => a.category === category)
	}
</script>

<svelte:head>
	<title>Animals per second | Keeping track of animals killed every second</title>
	<meta name="description" content="Many animals are killed in order to fill our needs. The numbers are incredible hard to comprehend. This website keeps track of the number of kills every second to put things into perspective." />
</svelte:head>

<Header number={sum.toLocaleString("nl-NL")}>
	{#snippet subtitle()}That's the number of land animals that were killed globally through farming since you opened this website. That is {bigNumberToWords(annualSum)} per year.{/snippet}
</Header>

<div class="animals">
	{#each filterAnimalByCategory(Category.Land) as animal}
		<AnimalCounter {...animal} />
	{/each}
</div>
<p class="many-more">And so many others...</p>

<h3>What about fish?</h3>
<p class="description">The number of fish that are killed each year is difficult to measure. Captured fish is measured in weight, rather than count. Roughly 175 million tonnes of fish are caught every year. Estimates put this somewhere between 1 and 2.5 trillion fish. That is more than 15 times the number of all land animals combined.</p>
<div class="animals">
	{#each filterAnimalByCategory(Category.Ocean) as animal}
		<AnimalCounter {...animal} />
	{/each}
</div>
<p class="many-more">And so many others...</p>

<h3>What about insects?</h3>
<p class="description">Insects are a difficult measure. Their large numbers and tiny size make it tough to get accurate measurements. Their wellbeing is difficult to evaluate as there is little research on the emotional and physical capacity of insects. None the less all sorts of insects are actively farmed in huge numbers.</p>
<div class="animals">
	{#each filterAnimalByCategory(Category.Insect) as animal}
		<AnimalCounter {...animal} />
	{/each}
</div>
<p class="many-more">And so many others...</p>

<div>
	<h2 class="statement">Let's be better.</h2>
</div>

<Sources {animals} />

<style lang="scss">
	p {
		margin: 1rem 0;
	}

	h3 {
		margin: 5rem 0 2rem;
		color: $yellow;
	}

	.animals {
		display: grid;
		gap: 1rem;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.description {
		margin: 2rem 0;
		line-height: 1.65em;
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
		color: $yellow;
	}
</style>
