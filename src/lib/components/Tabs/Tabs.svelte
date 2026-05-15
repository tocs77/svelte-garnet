<svelte:options customElement="garnet-tabs" />

<script lang="ts">
  import tabItems from './tabsdata.json';
  interface TabItem {
    name: string;
    text: string;
    id: number;
  }
  export let activeTabValue = 0;
  export let items: TabItem[] = [];
  export let vertical = false;
  if (items == null) {
    items = tabItems;
  }
  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="garnet-tabs" class:vertical>
  <ul class:vertical>
    {#each Object.entries(items) as [_, item]}
      <li class:vertical class={activeTabValue === item.id ? 'active' : ''} data-testid="tabHeader">
        <button type="button" class="tab-trigger" on:click={handleClick(item.id)}>
          {JSON.stringify(item.name).replace(/['"]+/g, '')}
        </button>
      </li>
    {/each}
  </ul>
  <div class="content" data-testid="tabContent">
    {#each Object.entries(items) as [_, item]}
      {#if activeTabValue === item.id}
        {JSON.stringify(item.text).replace(/['"]+/g, '')}
      {/if}
    {/each}
  </div>
</div>

<style>
  .garnet-tabs {
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }
  li {
    margin-bottom: -1px;
  }
  button.tab-trigger {
    border: 1px solid transparent;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: block;
    width: 100%;
    padding: 8px 16px;
    cursor: pointer;
    margin: 0;
    font: inherit;
    color: inherit;
    text-align: inherit;
    background: none;
  }
  button.tab-trigger:hover {
    border-color: #dee2e6;
    border-bottom-color: #ffffff;
  }
  li.active > button.tab-trigger {
    color: #ffffff;
    background-color: #733635;
    border-color: #dee2e6 #dee2e6 #fff;
  }
  .content {
    padding: 10px;
    min-height: 300px;
  }

  /* variant */
  .garnet-tabs.vertical {
    display: flex;
    flex-direction: row;
  }
  ul.vertical {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dee2e6;
    border-bottom: none;
    margin-top: 0;
  }
  ul.vertical button.tab-trigger {
    border-radius: 0;
    border-right: 0;
    border-color: #dee2e6;
  }
</style>
