<script>
  export let terrain_id, equipment;
</script>

<td class="w-8 border text-[5px] font-bold leading-none p-0">
  <div class="w-5 mx-auto">
    <img src="/equipments/{terrain_id}_{equipment.id}.png" alt="" />
  </div>
  <span>{equipment.name}</span>
</td>
