<script lang="ts">
	import { Data } from "$lib/data/Data"
</script>

<h4>Sources</h4>

<p><em>Various sources were used for each animal. When numbers differed largely the average was taken, depending on which most sourced seemed to agree on. When ranges were given the lower end of the range was used.</em></p>

{#each Object.values(Data) as { name, sources }}
  <p>
    {name}:

    {#each (sources || []) as source, index}
      <a href={source} target="_blank" rel="noreferrer nofollow">{source}</a>{#if index < sources.length - 1},&nbsp;{/if}
    {/each}
  </p>
{/each}

<style lang="scss">
  h4 {
    margin: clamp(5rem, 20vw, 10rem) 0 0;
  }

  p {
    font-size: 14px;
  }

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
