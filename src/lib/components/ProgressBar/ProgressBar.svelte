<svelte:options customElement="garnet-progressbar" />

<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { Tween } from 'svelte/motion';

  let {
    progressAmt = 52,
    tweenDuration = 400,
    animate = true,
    labelInside = true,
    labelTextOutside = 'This is a test',
    easing = cubicOut,
    color = '#733635',
  }: {
    progressAmt?: number;
    tweenDuration?: number;
    animate?: boolean;
    labelInside?: boolean;
    labelTextOutside?: string;
    easing?: (t: number) => number;
    color?: string;
  } = $props();

  const progress = new Tween(0, {
    duration: 400,
    easing: cubicOut,
  });

  $effect(() => {
    progress.set(Number(progressAmt), {
      duration: animate ? tweenDuration : 0,
      easing,
    });
  });
</script>

<div class="garnet-progressbar">
  <!-- Adds label inside progressbar -->
  {#if labelInside}
    <div class="labelInsideClass">
      <div class="progressbar" style="width: {progress.current}%; background-color: {color}">
        <span class="progress">
          {progress.current.toFixed(0)}%
        </span>
      </div>
    </div>
  {:else}
    <div class="labelOutsideClass">
      <span class="labelTextOutside">{labelTextOutside} </span>
      <span class="progress">
        {progress.current.toFixed(0)}%
      </span>
    </div>
    <div class="progressbar" style="width: {progress.current}%; background-color: {color}; height: 10px;"></div>
  {/if}
</div>

<style>
  .garnet-progressbar {
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
  }
  .progress {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }
  .progressbar {
    border-radius: 9999px;
  }
  .labelInsideClass {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    text-align: center;
    padding: 0.5rem;
    border-radius: 9999px;
    color: #000000;
  }
  .labelOutsideClass {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1px;
    color: #000000;
  }
</style>
