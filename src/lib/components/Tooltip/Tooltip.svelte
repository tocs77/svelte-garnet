<svelte:options customElement="garnet-tooltip" />

<script lang="ts">
  import { fade } from 'svelte/transition';
  export let id = 'tooltip';
  export let label: string;
  export let tip: string;
  export let timeout = 400;
  export let showHtml = false;

  let active = false;
  let enterTrigger: NodeJS.Timeout | null = null;
  let leaveTrigger: NodeJS.Timeout | null = null;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      active = false;
      (event.currentTarget as HTMLElement).blur();
    }
  }

  function handleMouseEnter() {
    enterTrigger = setTimeout(() => {
      active = true;
    }, timeout);
  }

  function handleMouseLeave() {
    if (enterTrigger) {
      clearTimeout(enterTrigger);
      enterTrigger = null;
    }
    leaveTrigger = setTimeout(() => {
      active = false;
    }, timeout);
  }

  function handleInteraction() {
    if (leaveTrigger) {
      clearTimeout(leaveTrigger);
      leaveTrigger = null;
    }
  }
</script>

<div class="garnet-tooltip">
  <div>
    <button
      aria-describedby={active ? id : undefined}
      type="button"
      class="trigger"
      on:click={() => (active = true)}
      on:keydown={handleKeyDown}
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
    >
      ?
    </button>
    {#if active}
      <div
        {id}
        role="tooltip"
        aria-label={label}
        transition:fade
        class="content"
        on:mouseenter={handleInteraction}
        on:mouseleave={handleMouseLeave}
      >
        {#if showHtml}
          {@html tip}
        {:else}
          {tip}
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  .garnet-tooltip {
    position: relative;
    z-index: 2;
  }
  .trigger {
    padding: 0;
    margin: 0;
    width: 19px;
    height: 19px;
    line-height: 15px;
    font-size: 17px;
    text-align: center;
    background-color: transparent;
    border-radius: 50%;
    border: 3px solid #733635;
    color: #999999;
    cursor: pointer;
    font-weight: bold;
  }
  .content {
    all: initial;
    position: absolute;
    left: 0;
    top: 100%;
    width: 300px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .trigger:focus {
    outline: 2px solid #000000;
  }
  [role='tooltip']:empty {
    display: none;
  }
</style>
