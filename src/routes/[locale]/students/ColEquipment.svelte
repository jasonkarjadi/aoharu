<script>
  export let terrain_id, equipment;
</script>

<td class="px-2 w-24 border text-left text-[10px]">
  <div class="w-5 float-left mr-1 mt-0.5">
    <img src="/equipments/{terrain_id}_{equipment.id}.png" alt="" />
  </div>
  {equipment.name}
</td>
