<script lang="ts">
	import { numbersSinceArrival } from "$lib/stores/data"
	import { secondsSinceArrival } from "$lib/stores/time"
	import { bigNumberToWords } from "$lib/utils/number"
	import RollingNumber from "./RollingNumber.svelte"

  const {
    name = "",
    slug = "",
    icon = "",
    annually = 0,
  } = $props()

  const daily = $derived(annually / 365)
  const hourly = $derived(daily / 24)
  const secondly = $derived(hourly / 60 / 60)
  const sinceArrival = $derived(secondly * $secondsSinceArrival)
</script>

<a href="/{slug}" class="animal">
  <img class="icon" loading="lazy" src={icon} alt="" width="80" height="80" />

  <div class="content">
    <h3>{name}</h3>

    <div>{bigNumberToWords(Math.floor(annually))} per year</div>
    <div>{bigNumberToWords(Math.floor(hourly))} per hour</div>
    <div class="counter"><span class="underline"><RollingNumber number={Math.round(sinceArrival).toLocaleString("nl-NL")} /> since you got here.</span></div>

    <div class="button">Tell me more</div>
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
    position: relative;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0 transparent;
    font-size: 16px;
    line-height: 1.5em;
    text-decoration: none;
    color: $white;

    @media (prefers-reduced-motion: no-preference) {
      transition: box-shadow 150ms, transform 150ms, background-color 150ms;
    }

    &:hover,
    &:focus-visible {
      box-shadow: -0.5rem 3px 2px rgba($black, 0.05), -1rem 10px 5px rgba($black, 0.05), -1.5rem 15px 10px rgba($black, 0.05), -2rem 25px 15px rgba($black, 0.1), -2.5rem 40px 30px rgba($black, 0.1);
      transform: translateY(-0.5rem) scale(1.05);
      outline: none;

      &::before {
        opacity: 0.75;
      }
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      background: $gradient-yellow;
      opacity: 0.1;
      z-index: -1;
      transition: opacity 100ms;
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
    width: clamp(50px, 20vw, 80px);
    height: clamp(50px, 20vw, 80px);

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

    &:hover {
      box-shadow: 0 0.2rem 0 white;
    }

    .animal:hover &,
    .animal:focus-visible & {
      color: white;
    }
  }
</style>
