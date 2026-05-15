<svelte:options customElement="garnet-chip" />

<script lang="ts">
  import Icon from '@iconify/svelte';
  export let active = true;
  export let close = false;
  export let chipContent = '';
  export let selected = false;
  export let outline = false;

  const onClose = () => {
    active = false;
    close = true;
  };

  const onChipKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      (e.currentTarget as HTMLElement).click();
    }
  };
  $: outline = outline;
</script>

<div class="garnet-chip">
  {#if active}
    <div class="chip" class:selected class:outline>
      <span class="chip-trigger" role="button" tabindex="0" on:click on:keydown={onChipKeydown}>
        {chipContent}
      </span>
      {#if close}
        <button type="button" class="close" aria-label="Remove" on:click|stopPropagation={onClose}>
          <Icon icon="mdi:delete" />
        </button>
      {/if}
    </div>
  {/if}
</div>

<style>
  .garnet-chip {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
  }

  .chip {
    color: #733635;
    align-items: center;
    cursor: default;
    display: inline-flex;
    line-height: 20px;
    max-width: 100%;
    outline: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    border-radius: 25px;
    padding: 10px;
    background-color: #d3d3d3;
    gap: 0;
  }

  .chip-trigger {
    flex: 1 1 auto;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    line-height: inherit;
    text-align: inherit;
    cursor: inherit;
    display: inline-flex;
    align-items: center;
  }

  .close {
    cursor: pointer;
    margin-left: 6px;
    margin-right: -6px;
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
  }
  .close:focus,
  .close:hover,
  .close:active {
    opacity: 0.72;
  }
  .outline {
    background-color: #ffffff;
    border: 1px solid #d3d3d3;
  }

  .selected {
    background-color: #d19c9b;
  }
</style>
