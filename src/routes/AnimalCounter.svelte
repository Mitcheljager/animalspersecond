<script lang="ts">
	import { numbersSinceArrival } from "$lib/stores/data"
	import { secondsSinceArrival } from "$lib/stores/time"
	import { bigNumberToWords } from "$lib/utils/number"
	import RollingNumber from "./RollingNumber.svelte"

  const {
    index = 0,
    name = "",
    icon = "",
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

<div class="animal">
  <img class="icon" src={icon} alt="" width="80" height="80" />

  <div>
    <h3>{name}</h3>

    <div>{bigNumberToWords(Math.floor(annually))} per year</div>
    <div>{bigNumberToWords(Math.floor(hourly))} per hour</div>
    <div class="counter"><RollingNumber number={Math.floor(sinceArrival).toLocaleString()} /> since you arrived</div>
  </div>
</div>

<style lang="scss">
  h3 {
    margin: 0 0 0.5rem;
    font-weight: bold;
    color: white;
  }

  .animal {
    --rolling-number-font-size: 1em;
    display: flex;
    gap: 1rem;
    margin: 0 0 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0 darken($green, 20%);
    font-size: 18px;
    line-height: 1.5em;

    &:hover {
      background: darken($green, 20%);
      box-shadow: 0 0 0 1rem darken($green, 20%);
      transition: box-shadow 200ms;
    }
  }

  .icon {
    filter: invert(1);
  }

  .counter {
    color: $yellow;
    font-weight: bold;
  }
</style>
