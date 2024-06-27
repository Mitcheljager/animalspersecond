<script lang="ts">
	import { Data } from "$lib/data/Data"
	import { secondsSinceArrival } from "$lib/stores/time"
	import { numbersSinceArrival } from "$lib/stores/data"
	import type { Animal } from "$lib/types/Animal"
	import AnimalCounter from "./AnimalCounter.svelte"

	const animals: Array<Animal> = sortAnimals()

	function sortAnimals(): Array<Animal> {
		return Object.values(Data).sort((a, b) => b.annually - a.annually)
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{$secondsSinceArrival}

<h2>{Math.floor($numbersSinceArrival.reduce((a, b) => a + b, 0)).toLocaleString()} animals killed since you opened this page</h2>

{#each animals as animal, index}
	<AnimalCounter {index} {...animal} />
{/each}

<style lang="scss">
</style>
