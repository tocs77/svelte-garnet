<script lang="ts">
  import SelectBox from './lib/components/SelectBox/SelectBox.svelte';
  import type { SelectOption } from './lib/components/SelectBox/SelectBox.svelte';

  const selectOptions: SelectOption[] = [
    { id: 1, value: 'apple', label: 'Apple' },
    { id: 2, value: 'banana', label: 'Banana' },
    { id: 3, value: 'cherry', label: 'Cherry' },
  ];

  const secondSelectOptions: SelectOption[] = [
    { id: 1, value: 'Earth', label: 'Earth' },
    { id: 2, value: 'Mars', label: 'Mars' },
    { id: 3, value: 'Jupiter', label: 'Jupiter' },
  ];

  let index = $state(1);
  const selected = $derived(selectOptions.find((o) => o.id === index) ?? null);
  let secondIndex = $state(1);
  const secondSelected = $derived(secondSelectOptions.find((o) => o.id === secondIndex) ?? null);
</script>

<SelectBox {selectOptions} bind:index />
<div>Selected: {selected?.label}</div>
<SelectBox selectOptions={secondSelectOptions} bind:index={secondIndex} />
<div>Second Selected: {secondSelected?.label}</div>
