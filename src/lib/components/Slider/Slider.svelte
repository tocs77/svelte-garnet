<svelte:options customElement="garnet-slider" />

<script lang="ts">
  import './Slider.css';
  export let id = 'sliderChoice';
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let val = 50;
  export let disabled = false;
  export let ticks = false;
  export let label = 'Please select a value';
</script>

<div class="garnet-slider">
  <div class="range-slider">
    <label for={id}>{label}</label>
    <input type="range" {id} {min} {max} {step} name={id} bind:value={val} {disabled} />
    {#if ticks}
      <div class="sliderticks">
        <span>{min}</span>
        <span>{max / 2}</span>
        <span>{max}</span>
      </div>
    {/if}
  </div>
  <div class="selectedValue">Value: {val}</div>
</div>
