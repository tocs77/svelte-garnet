<svelte:options customElement="garnet-selectbox" />

<script context="module" lang="ts">
  export type SelectOption = {
    value: string;
    label: string;
    id: number;
  };
</script>

<script lang="ts">
  import './SelectBox.css';
  export let selectOptions: SelectOption[] = [];
  export let displayText = (a: SelectOption) => a.value;
  export let index = 1;
  export let disabled = false;
  export let selected: SelectOption | null = null;
  export let label = 'Test dropdown:';

  $: selected = selectOptions.find((option) => option.id === index) || null;

  export const handleChange = (e: Event) => {
    index = (e.currentTarget as HTMLSelectElement).selectedIndex + 1 || 1;
  };
</script>

<div class="garnet-selectbox">
  <label for="garnet-selectbox">{label}</label>
  <select bind:value={index} on:change={handleChange} name="garnet-selectbox">
    {#each selectOptions as option, i}
      <option value={i + 1} {disabled}>
        {displayText(option)}
      </option>
    {/each}
  </select>
</div>
