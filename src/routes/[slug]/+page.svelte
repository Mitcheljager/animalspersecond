<script lang="ts">
	import { secondsSinceArrival } from "$lib/stores/time"
	import { bigNumberToWords } from "$lib/utils/number"
	import { capitalizeFirstLetter } from "$lib/utils/text";
	import { annuallyToSecondly } from "$lib/utils/time"
	import Header from "../Header.svelte"

  const { data } = $props()
  const { name, annually, description } = $derived(data)

  const sinceArrival = $derived(Math.round(annually / 365 / 24 / 60 / 60 * $secondsSinceArrival))
  const secondly = $derived(Math.round(annuallyToSecondly(annually) * 100) / 100)
</script>

<svelte:head>
	<title>{capitalizeFirstLetter(bigNumberToWords(annually))} {name.toLowerCase()} are killed every year</title>
  <meta name="description" content="{name} are killed without much thought in order to meet our needs. {capitalizeFirstLetter(bigNumberToWords(annually))} {name.toLowerCase()} are killed every year, that is {secondly < 1 ? secondly : Math.round(secondly)} per second." />
</svelte:head>

<Header number={sinceArrival.toLocaleString()}>
	{#snippet subtitle()}That's the number of {name.toLowerCase()} that were killed globally through farming since you opened this website.{/snippet}
</Header>

<div class="description">
  <p>Around {bigNumberToWords(annually)} {name.toLowerCase()} are killed each year.<p>
  {@html description}
</div>

<style lang="scss">
  .description {
    line-height: 1.65em;

    :global(h3) {
      margin: 3rem 0 0;
      color: $yellow;
    }
  }

  p {
    margin: 1rem 0;
  }
</style>
