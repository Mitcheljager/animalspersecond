<script lang="ts">
	import { secondsSinceArrival } from '$lib/stores/time'
	import { secondsToWords } from '$lib/utils/time'
	import Header from '../Header.svelte'

  const {
    data
  } = $props()

  const { name, annually } = $derived(data)

  const sinceArrival = $derived(Math.round(annually / 365 / 24 / 60 / 60 * $secondsSinceArrival))
</script>

<Header number={`${sinceArrival.toLocaleString()} ${name}`}>
	<h2>That's the number of {name.toLowerCase()} that were killed globally since you opened this website.</h2>
	<p><em>That was {secondsToWords($secondsSinceArrival)}</em></p>
</Header>
