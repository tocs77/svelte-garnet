<svelte:options customElement="garnet-spinner" />

<script lang="ts">
  import './Spinner.css';
  export let color = '#733635';
  export let duration = '0.75s';
  export let size = '60';
  export let variant: 'circle' | 'jumper' = 'circle';
  export const unit = 'px';
  export const pause = false;
  let durationUnit = duration.match(/[a-zA-Z]/)?.[0] ?? 's';
  let durationNum = duration.replace(/[a-zA-Z]/, '');
  const range = (size: number, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);
</script>

<div class="garnet-spinner">
  <!-- Circle spinner -->
  {#if variant === 'circle'}
    <div>
      <div class="circle" style="--size: {size}px; --color: {color}; --duration: {duration}"></div>
    </div>
  {/if}
  {#if variant === 'jumper'}
    <div
      class="jumper-wrap"
      style="--size: {size}px; --color: {color}; --duration: {duration};"
    >
      {#each range(3, 1) as version}
        <div class="jumper" style="animation-delay: {(1 / 3) * (version - 1)}s;"></div>
      {/each}
    </div>
  {/if}
</div>
