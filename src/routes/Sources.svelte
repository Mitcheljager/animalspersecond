<script lang="ts">
	import { Data } from "$lib/data/Data"
</script>

<h4>Sources</h4>

{#each Object.values(Data) as { name, sources }}
  <p>
    {name}:

    {#each (sources || []) as source, index}
      <a href={source} target="_blank" rel="noreferrer nofollow">{source}</a>{#if index < sources.length - 1},&nbsp;{/if}
    {/each}
  </p>
{/each}

<style lang="scss">
  a {
    color: $yellow;
    text-decoration: none;
    word-break: break-all;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
</style>
