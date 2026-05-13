<svelte:options customElement="garnet-radiobutton" />

<script lang="ts">
  import './RadioButton.css';
  export let selectOptions = [
    {
      value: 'Test slot 1',
      label: 'Test slot 1',
    },
    {
      value: 'Test slot 2',
      label: 'Test slot 2',
    },
    {
      value: 'Test slot 3',
      label: 'Test slot 3',
    },
  ];
  export let legend = 'Legend';
  export let disabled = false;
  export let userSelected = selectOptions[0].value;
  const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
</script>

<fieldset id="garnet" {disabled}>
  <div class="legend" id={`label-${legend}`}>
    {legend}
  </div>
  {#each selectOptions as { value, label }}
    <input class="sr-only" type="radio" id={slugify(label)} on:change bind:group={userSelected} {value} />
    <label for={slugify(label)}> {label} </label>
  {/each}
</fieldset>
