<script lang="ts">
	import { Data } from "$lib/data/Data"
	import { secondsSinceArrival } from "$lib/stores/time"
	import { numbersSinceArrival } from "$lib/stores/data"
	import type { Animal } from "$lib/types/Animal"
	import AnimalCounter from "./AnimalCounter.svelte"
	import RollingNumber from "./RollingNumber.svelte"
	import { secondsToWords } from "$lib/utils/time";

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

<h2><RollingNumber number={sum.toLocaleString()} /></h2>
<h3>That's the number of animals that were killed around the world since you opened the page</h3>
<p>That was {secondsToWords($secondsSinceArrival)}</p>

{#each animals as animal, index}
	<AnimalCounter {index} {...animal} />
{/each}

<style lang="scss">
	h2 {
    --rolling-number-font-size: 1em;
  }
</style>
