<script lang="ts">
	import { secondsSinceArrival } from '$lib/stores/time'
	import { bigNumberToWords } from '$lib/utils/number'
	import { capitalizeFirstLetter } from '$lib/utils/text';
	import { secondsToWords } from '$lib/utils/time'
	import Header from '../Header.svelte'

  const { data } = $props()
  const { name, annually, description } = $derived(data)

  const sinceArrival = $derived(Math.round(annually / 365 / 24 / 60 / 60 * $secondsSinceArrival))
</script>

<svelte:head>
	<title>{capitalizeFirstLetter(bigNumberToWords(annually))} {name.toLowerCase()} are killed every year</title>
</svelte:head>

<Header number={sinceArrival.toLocaleString()}>
	<h2>That's the number of {name.toLowerCase()} that were killed globally since you opened this website.</h2>
	<p><em>That was {secondsToWords($secondsSinceArrival)}</em></p>
</Header>

<div class="description">
  <p>Around {bigNumberToWords(annually)} {name.toLowerCase()} are killed each year.<p>
  {@html description}
</div>

<style lang="scss">
  .description {
    font-size: 18px;
    line-height: 1.65em;

    :global(h3) {
      margin: 3rem 0 0;
      color: $yellow;
    }
  }
</style>
