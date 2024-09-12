<script>
  export let slot, equipment;
</script>

<td class="w-8 border text-[5px] font-bold leading-none p-0">
  <div class="w-5 mx-auto">
    <img src="/equipments/{slot}_{equipment.id}.png" alt="" />
  </div>
  <span>{equipment.name}</span>
</td>
