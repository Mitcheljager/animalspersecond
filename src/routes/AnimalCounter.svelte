<script lang="ts">
	import { numbersSinceArrival } from "$lib/stores/data"
	import { secondsSinceArrival } from "$lib/stores/time"
	import RollingNumber from "./RollingNumber.svelte"

  const {
    index = 0,
    name = "",
    annually = 0,
  } = $props()

  const daily = $derived(annually / 365)
  const hourly = $derived(daily / 24)
  const secondly = $derived(hourly / 60 / 60)
  const sinceArrival = $derived(secondly * $secondsSinceArrival)

  $effect(() => {
    $numbersSinceArrival[index] = sinceArrival
  })
</script>

<div>
  <h3>{name}</h3>
  <div>{Math.floor(annually).toLocaleString()} {name} killed per year</div>
  <div>{Math.floor(hourly).toLocaleString()} {name} killed per hour</div>
  <div><RollingNumber number={Math.floor(sinceArrival).toLocaleString()} /> {name} killed since you arrived.</div>
</div>

<style lang="scss">
  div {
    --rolling-number-font-size: 1em;
  }
</style>
