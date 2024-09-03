<script>
  export let affinity;

  // let upgrades = affinity?.slice(1).join(", ") ?? "";
</script>

<!-- <td class="border">{affinity.join(" / ")}</td> -->
<!-- <td class="border">{affinity?.[0] ?? ""} {upgrades && `(${upgrades})`}</td> -->
<td class="px-2 border text-left">{affinity.name}</td>
