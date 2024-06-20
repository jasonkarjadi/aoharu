<script>
  import CombatD from "./CombatD.svelte";
  import TerrainD from "./TerrainD.svelte";

  export let data;
  let { rows } = data;
  // console.log(rows);
</script>

<div class="mx-4">
  <div class="h-20 mt-4 bg-slate-400"></div>
  <!-- filter -->
  <div class="overflow-x-auto mt-4 bg-slate-100">
    <table class="border border-black w-max text-sm">
      <thead class="sticky top-0">
        <tr class="*:border *:border-black *:h-8 *:bg-slate-300">
          <th colspan="3">生徒</th>
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
        {#each rows as unit (unit.name + unit.outfit)}
          <tr class="*:border-black even:bg-slate-200">
            <td class="border-y">
              <div class="flex gap-2 items-center">
                <div class="bg-slate-500 size-6"><img src="#" alt="" /></div>
                <div class="flex-1">
                  <ruby calss="text-sm">
                    {unit.surname_kanji}
                    <rt>{unit.surname_kana}</rt>
                  </ruby>
                </div>
              </div>
            </td>
            <td class="border-y text-left px-2 align-bottom">{unit.name}</td>
            <td
              class="border-y px-2 text-[8px] font-bold align-bottom leading-normal"
            >
              {unit.outfit}
            </td>
            <td class="px-2 border">{unit.school}</td>
            <td class="px-2 border">{unit.club}</td>
            <td class="px-2 border font-bold {unit.role}">
              {unit.role}
            </td>
            <CombatD type={unit.attack_type} />
            <CombatD type={unit.defense_type} />
            <td class="px-2 border">{unit.class}</td>
            <td class="border">{unit.weapon_type}</td>
            <td class="border">{unit.cover ? "○" : "×"}</td>
            <td
              class="border italic font-medium text-neutral-50 bg-[rgb(43,68,101)]"
            >
              {unit.position}
            </td>
            <TerrainD affinity={unit.city_affinity} />
            <TerrainD affinity={unit.field_affinity} />
            <TerrainD affinity={unit.indoor_affinity} />
            <td class="border">EX</td>
            <td class="border">NS</td>
            <td class="border">SS</td>
            <td class="w-24 border">{unit.equipment_first}</td>
            <td class="w-24 border">{unit.equipment_second}</td>
            <td class="w-24 border">{unit.equipment_third}</td>
            <td class="border">{unit.recruit}</td>
            <td class="px-2 border">
              {unit.release_date
                ?.toISOString()
                .slice(0, 10)
                .replaceAll("-", "/")}
            </td>
            <td class="border">exgift</td>
            <td class="border">gift</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <!-- <div class="fixed bottom-0 left-0 right-0 h-16 border">
    <div class="flex">
      <div class="flex">
        <div class="striker" id="striker_one">
          <img src="" alt="striker1" />
        </div>
        <div class="striker" id="striker_two">
          <img src="" alt="striker2" />
        </div>
        <div class="striker" id="striker_three">
          <img src="" alt="striker3" />
        </div>
        <div class="striker" id="striker_four">
          <img src="" alt="striker4" />
        </div>
        <div class="special" id="special_one">
          <img src="" alt="special1" />
        </div>
        <div class="special" id="special_two">
          <img src="" alt="special2" />
        </div>
      </div>
    </div>
  </div> -->
</div>

<style>
  .STRIKER {
    color: #cc4125;
  }
  .SPECIAL {
    color: #1155cc;
  }
</style>
