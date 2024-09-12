<script>
  export let artifact;
</script>

<td class="px-2 border text-[5px] font-bold leading-none">
  {#if artifact}
    <div class="w-5 mx-auto">
      <img src="/artifacts/{artifact.id}.png" alt="" />
    </div>
    <span>{artifact.name}</span>
  {/if}
</td>
