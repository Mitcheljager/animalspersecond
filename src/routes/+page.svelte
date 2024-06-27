<script lang="ts">
	import { Data } from "$lib/data/Data"
	import { secondsSinceArrival } from "$lib/stores/time"
	import { numbersSinceArrival } from "$lib/stores/data"
	import type { Animal } from "$lib/types/Animal"
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

{$secondsSinceArrival}

<h2><RollingNumber number={sum.toLocaleString()} /> Animals killed since you opened this page</h2>

{#each animals as animal, index}
	<AnimalCounter {index} {...animal} />
{/each}

<style lang="scss">
	h2 {
    --rolling-number-font-size: 1em;
  }
</style>
