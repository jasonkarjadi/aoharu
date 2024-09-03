<script>
  import CombatD from "$lib/components/CombatD.svelte";
  import TerrainD from "$lib/components/TerrainD.svelte";

  export let data;
  let { students, error } = data;
  $: error && console.error(error);
  console.log(students[0]);
</script>

<div class="mx-4">
  <div class="h-20 mt-4 bg-slate-400"></div>
  <!-- filter -->
  <div class="overflow-x-auto mt-4 bg-slate-100">
    <table class="border border-black w-max text-sm">
      <thead class="sticky top-0">
        <tr class="*:border *:border-black *:h-8 *:bg-slate-300">
          <th colspan="2">生徒</th>
          <th colspan="2">所属</th>
          <th>役割</th>
          <th class="w-20">攻撃</th>
          <th class="w-20">防御</th>
          <th>クラス</th>
          <th class="px-2">武器</th>
          <th class="px-2">遮蔽</th>
          <th class="px-2">ポジション</th>
          <th class="w-16">市街地</th>
          <th class="w-16">屋外</th>
          <th class="w-16">屋内</th>
          <th colspan="4">装備</th>
          <th colspan="2">オーパーツ</th>
          <th colspan="2">贈り物</th>
          <th>募集</th>
          <th>実装日</th>
        </tr>
      </thead>
      <tbody class="text-center">
        {#each students as student (student.id)}
          <tr class="*:border-black even:bg-slate-200">
            <td class="border-y p-0">
              <div class="flex gap-2 items-center">
                <div class="bg-slate-500 size-6"><img src="#" alt="" /></div>
                <div class="flex-1 text-right leading-none">
                  <ruby class="text-[10px] font-bold">
                    {#if typeof student.surname === "string"}
                      {student.surname}
                    {:else}
                      {student.surname.kanji}<rt>{student.surname.kana}</rt>
                    {/if}
                  </ruby>
                </div>
              </div>
            </td>
            <td class="border-y p-0 pr-2">
              <div class="flex justify-between gap-2">
                <span>{student.name}</span>
                <span class="text-[8px] font-bold">
                  {student.outfit.name}
                </span>
              </div>
            </td>
            <td class="px-2 border text-left text-[10px]">
              <div class="w-5 float-left mr-1 mt-px">
                <img src="/schools/{student.school.id}.png" alt="" />
              </div>
              {student.school.name}
            </td>
            <td class="px-2 border text-right text-[10px]">{student.club}</td>
            <td class="px-2 border font-bold {student.role}">
              {student.role}
            </td>
            <CombatD type={student.type_attack} />
            <CombatD type={student.type_defense} />
            <td class="px-2 border text-left text-[10px] leading-none py-0">
              <div class="w-3 float-left mr-1">
                <img
                  src="/cropped/classes/{student.class_first.id}.png"
                  alt=""
                  class="bg-slate-700 rounded"
                />
                {#if student.class_second}
                  <img
                    src="/cropped/classes/{student.class_second.id}.png"
                    alt=""
                    class="bg-slate-700 rounded"
                  />
                {/if}
              </div>
              {student.class_first.name}
              {#if student.class_second}
                <br />
                {student.class_second.name}
              {/if}
            </td>
            <td class="border">{student.type_weapon}</td>
            <td class="border">{student.cover ? "○" : "×"}</td>
            <td
              class="border italic font-medium text-neutral-50 bg-[rgb(43,68,101)]"
            >
              {student.role === "SPECIAL" ? "BACK" : student.position}
            </td>
            <TerrainD affinity={student.street_affinity} />
            <TerrainD affinity={student.outdoor_affinity} />
            <TerrainD affinity={student.indoor_affinity} />
            <td class="px-2 w-24 border text-left text-[10px]">
              <div class="w-5 float-left mr-1 mt-0.5">
                <img
                  src="/equipments/1_{student.equipment_first.id}.png"
                  alt=""
                />
              </div>
              {student.equipment_first.name}
            </td>
            <td class="px-2 w-24 border text-left text-[10px]">
              <div class="w-5 float-left mr-1 mt-0.5">
                <img
                  src="/equipments/2_{student.equipment_second.id}.png"
                  alt=""
                />
              </div>
              {student.equipment_second.name}
            </td>
            <td class="px-2 w-24 border text-left text-[10px]">
              <div class="w-5 float-left mr-1 mt-0.5">
                <img
                  src="/equipments/3_{student.equipment_third.id}.png"
                  alt=""
                />
              </div>
              {student.equipment_third.name}
            </td>
            <td class="px-1 border">
              {#if student.favourite}
                <div class="w-5">
                  <img src="/favorites/{student.id}.png" alt="♡" />
                </div>
              {/if}
            </td>
            <td class="px-2 border artifact"></td>
            <td class="px-2 border artifact2"></td>
            <td class="border exgift"></td>
            <td class="border gift"></td>
            <td class="px-2 border">{student.recruitment}</td>
            <td class="px-2 border">
              {student.release_date_jpn}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  .STRIKER {
    /* color: #cc4125; */
    color: #fc5022;
  }
  .SPECIAL {
    /* color: #1155cc; */
    color: #007df5;
  }
</style>
