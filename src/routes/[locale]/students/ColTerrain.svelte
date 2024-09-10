<script>
  export let affinity;
</script>

<td class="px-2 border text-[10px]">
  <div class="flex">
    <div class="w-5 mr-0.5">
      <img
        src="/wikiassets/terrain_levels/{affinity.id}.png"
        alt={affinity.id}
      />
    </div>
    <span>
      {affinity.name}{#if affinity.upgrade}→{affinity.upgrade.name}{/if}
    </span>
  </div>
</td>
