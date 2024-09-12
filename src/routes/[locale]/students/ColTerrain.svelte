<script>
  export let affinity;
</script>

<td class="border text-[5px] font-bold leading-none">
  <div class="w-4 mx-auto">
    <img src="/wikiassets/terrain_levels/{affinity.id}.png" alt={affinity.id} />
  </div>
  <p>
    {affinity.name}{#if affinity.upgrade}→{affinity.upgrade.name}{/if}
  </p>
</td>
