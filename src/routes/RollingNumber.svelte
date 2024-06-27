<script lang="ts">
	import RollingNumberDigit from "./RollingNumberDigit.svelte"

  const {
    number = ""
  } = $props()

  const digits: Array<string> = $derived(number.toString().split(""))
</script>

<div class="digits" aria-label="{number}%">
  {#each digits as digit, i (digits.length - i)}
    <RollingNumberDigit {digit} />
  {/each}
</div>

<style lang="scss">
  .digits {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
</style>
