<script>
  import { page } from "$app/stores";
  import CombatD from "$lib/components/CombatD.svelte";
  // import TerrainD from "$lib/components/TerrainD.svelte";

  export let data;
  let { students, error } = data;
  $: error && console.error(error);
</script>

<div class="mx-4">
  <div class="h-20 mt-4 bg-slate-400"></div>
  <!-- filter -->
  <div class="overflow-x-auto mt-4 bg-slate-100">
    <table class="border border-black w-max text-sm">
      <thead class="sticky top-0">
        <tr class="*:border *:border-black *:h-8 *:bg-slate-300">
          <th colspan="2">生徒</th>
          <th>学校</th>
          <th>部活</th>
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
          <th>EX</th>
          <th>NS</th>
          <th>SS</th>
          <th colspan="3">装備</th>
          <th class="px-2">募集</th>
          <th>実装日</th>
          <th>特大</th>
          <th>大</th>
        </tr>
      </thead>
      <tbody class="text-center">
        {#each students as student (student.id)}
          {@const { student_profile, student_outfit } = student}
          {@const { student_name, student_surname, type_weapon } =
            student_profile}
          <tr class="*:border-black even:bg-slate-200">
            <td class="border-y p-0">
              <div class="flex gap-2 items-center">
                <div class="bg-slate-500 size-6"><img src="#" alt="" /></div>
                <div class="flex-1 text-right leading-none">
                  <ruby class="text-[10px] font-bold">
                    {#if $page.params.locale === "jpn"}
                      {student_surname.name.kanji}<rt
                        >{student_surname.name.kana}</rt
                      >
                    {:else}
                      {student_surname.name}
                    {/if}
                  </ruby>
                </div>
              </div>
            </td>
            <td class="border-y p-0 pr-2">
              <div class="flex justify-between gap-2">
                <span>{student_name.name}</span>
                <span class="text-[8px] font-bold">
                  {student_outfit.name}
                </span>
              </div>
            </td>
            <td class="px-2 border">{student_profile.school.name}</td>
            <td class="px-2 border">{student_profile.school_club.name}</td>
            <td class="px-2 border font-bold {student.combat_role.name}">
              {student.combat_role.name}
            </td>
            <CombatD type={student.type_attack} />
            <CombatD type={student.type_defense} />
            <td class="px-2 border">{student.combat_class.name}</td>
            <td class="border">{type_weapon.name}</td>
            <td class="border">{student.cover ? "○" : "×"}</td>
            <td
              class="border italic font-medium text-neutral-50 bg-[rgb(43,68,101)]"
            >
              {type_weapon.combat_position.name}
            </td>
            <!-- <TerrainD affinity={student.city_affinity} />
            <TerrainD affinity={student.field_affinity} />
            <TerrainD affinity={student.indoor_affinity} /> -->
            <td class="border URBAN"></td>
            <td class="border OUTDOOR"></td>
            <td class="border INDOOR"></td>
            <td class="border EX"></td>
            <td class="border NS"></td>
            <td class="border SS"></td>
            <td class="w-24 border">{student.equipment_first.name}</td>
            <td class="w-24 border">{student.equipment_second.name}</td>
            <td class="w-24 border">{student.equipment_third.name}</td>
            <td class="border">{student.type_recruitment.name}</td>
            <td class="px-2 border">
              {student.release_date_jpn}
            </td>
            <td class="border exgift"></td>
            <td class="border gift"></td>
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
