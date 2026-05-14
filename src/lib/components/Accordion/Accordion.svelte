<svelte:options customElement="garnet-accordion" />

<script context="module" lang="ts">
  export type AccordionData = {
    title: string;
    text: string;
  };
</script>

<script lang="ts">
  import AccordionItem from './AccordionItem.svelte';
  import accordionData from './accordiondata.json';
  export let defaultOpen = false;
  export let data: AccordionData[] = accordionData;
</script>

<div class="garnet-accordion">
  {#each data as entry}
    <AccordionItem title={entry.title} entry={entry.text} isOpen={defaultOpen}>
      <p>{entry.text}</p>
    </AccordionItem>
  {/each}
</div>

<style>
  .garnet-accordion {
    display: flex;
    flex-direction: column;
    width: 450px;
  }
</style>
