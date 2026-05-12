<svelte:options customElement="garnet-input" />

<script lang="ts">
  export let label = "Label";
  export let placeholder = "default placeholder";
  export let inputName = "";
  export let disabled = false;
  export let fieldID = "";
  export let value: string | undefined = undefined;

  const onInput = (e: Event) => {
    value = (e.currentTarget as HTMLInputElement).value;
  };
</script>

<div class="garnet-input">
  {#if label}
    <label for={fieldID}>
      {label}
    </label>
  {/if}
  <input
    type="text"
    id={fieldID}
    name={inputName}
    {placeholder}
    {disabled}
    bind:value
    on:input={onInput}
  />
</div>

<style>
  .garnet-input {
    display: flex;
    flex-direction: row;
    font-family: Arial, Helvetica, sans-serif;
  }
  input[type="text"] {
    width: 200px;
    border-radius: 4px;
    border-color: #733635;
    height: 30px;
    outline: none;
  }
  label {
    padding-right: 10px;
    display: flex;
    align-self: center;
  }
  input:disabled {
    cursor: not-allowed;
  }
</style>
