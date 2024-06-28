<script lang="ts">
	import { numbersSinceArrival } from "$lib/stores/data"
	import { secondsSinceArrival } from "$lib/stores/time"
	import { bigNumberToWords } from "$lib/utils/number"
	import { toSlug } from "$lib/utils/route";
	import RollingNumber from "./RollingNumber.svelte"

  const {
    index = 0,
    name = "",
    slug = "",
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

<a href="/{slug}" class="animal">
  <img class="icon" loading="lazy" src={icon} alt="" width="80" height="80" />

  <div class="content">
    <h3>{name}</h3>

    <div>{bigNumberToWords(Math.floor(annually))} per year</div>
    <div>{bigNumberToWords(Math.floor(hourly))} per hour</div>
    <div class="counter"><span class="underline"><RollingNumber number={Math.round(sinceArrival).toLocaleString()} /> since you arrived.</span></div>

    <button class="button">Tell me more</button>
  </div>
</a>

<style lang="scss">
  h3 {
    margin: 0 0 0.5rem;
    color: white;
    font-size: clamp(20px, 5vw, 21px);
    font-family: $font-family-brand;
    font-weight: normal;
  }

  .animal {
    $hover: darken($yellow, 15%);
    --rolling-number-font-size: 1em;
    display: flex;
    gap: 1rem;
    margin: 0 0 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0 $hover;
    font-size: 16px;
    line-height: 1.5em;
    text-decoration: none;
    color: $white;

    &:hover,
    &:focus-visible {
      background: $hover;
      box-shadow: 0 0 0 1rem $hover;
      outline: none;

      @media (prefers-reduced-motion: no-preference) {
        transition: box-shadow 200ms;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @keyframes wiggle {
    25% {
      transform: translateY(-2px) rotate(-3deg);
    } 50% {
      transform: translateY(2px) rotate(3deg);
    } 75% {
      transform: translateY(-2px) rotate(-3deg);
    }
  }

  .icon {
    .animal:hover &,
    .animal:focus-visible & {
      filter: brightness(100);

      @media (prefers-reduced-motion: no-preference) {
        animation: wiggle 500ms;
      }
    }
  }

  .counter {
    @include text-gradient($gradient-yellow);
    display: inline-block;
    color: $yellow;
    font-family: $font-family-brand;
    font-size: 18px;

    .animal:hover &,
    .animal:focus-visible & {
      color: white;
    }
  }

  .underline {
    box-shadow: 0 0.2rem 0 currentColor;
  }

  .button {
    appearance: none;
    padding: 0;
    margin-top: 0.5rem;
    border: 0;
    background: transparent;
    color: $yellow;
    font-family: $font-family-brand;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;

    .animal:hover &,
    .animal:focus-visible & {
      color: white;
    }
  }
</style>
