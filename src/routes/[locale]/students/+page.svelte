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
  <div class="overflow-x-auto mt-4 pb-4 bg-slate-300">
    <table class="w-max text-sm">
      <thead class="sticky top-0">
        <tr class="*:border *:border-black *:h-8 *:bg-slate-300">
          <th class="sticky left-0">生徒</th>
          <th>学校</th>
          <th>部活</th>
          <th>役割</th>
          <th class="w-16">攻撃</th>
          <th class="w-16">防御</th>
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
          <th>特大</th>
          <th>大</th>
          <th class="px-2">募集</th>
          <th>実装日</th>
        </tr>
      </thead>
      <tbody class="text-center">
        {#each rows as unit (unit.outfit + unit.name)}
          <tr class="*:border *:border-black">
            <td class="sticky left-0 pr-2 bg-slate-300">
              <div class="flex gap-2 items-center">
                <div class="bg-slate-500 size-6"><img src="#" alt="" /></div>
                <div class="leading-none">
                  <ruby>
                    <span class="flex justify-between w-[70px]">
                      {#each unit.surname_kanji as kanji}
                        <span>{kanji}</span>
                      {/each}
                    </span>
                    <rt class="relative top-1">{unit.surname_kana}</rt>
                  </ruby><span class="mx-2">{unit.name}</span><span
                    class="text-[8px] font-bold text-gray-700"
                  >
                    {unit.outfit}
                  </span>
                </div>
              </div>
            </td>
            <td class="px-2">{unit.school}</td>
            <td class="px-2">{unit.club}</td>
            <td class="px-2 font-bold {unit.role}">
              {unit.role}
            </td>
            <CombatD type={unit.attack_type} />
            <CombatD type={unit.defense_type} />
            <td class="px-2">{unit.class}</td>
            <td>{unit.weapon_type}</td>
            <td>{unit.cover ? "○" : "×"}</td>
            <td class="italic text-neutral-50 bg-[rgb(43,68,101)]">
              {unit.position}
            </td>
            <TerrainD affinity={unit.city_affinity} />
            <TerrainD affinity={unit.field_affinity} />
            <TerrainD affinity={unit.indoor_affinity} />
            <td>EX</td>
            <td>NS</td>
            <td>SS</td>
            <td class="w-20">{unit.equipment_first}</td>
            <td class="w-20">{unit.equipment_second}</td>
            <td class="w-20">{unit.equipment_third}</td>
            <td>exgift</td>
            <td>gift</td>
            <td>{unit.recruit}</td>
            <td class="px-2">
              {unit.release_date
                ?.toISOString()
                .slice(0, 10)
                .replaceAll("-", "/")}
            </td>
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
