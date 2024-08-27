<script>
  //   export let data;

  let bosses = [
    ["デカグラマトン", ["ビナー", "ケセド", "ホド", "ケプラー", "ゲボラ"]],
    ["スランピア", ["シロ＆クロ", "ゴズ"]],
    ["聖徒の交わり", ["ヒエロニムス", "グレゴリオ"]],
    ["", ["KAITEN FX Mk.0"]],
    ["ライブラリー・オブ・ロア", ["ペロロジラ"]],
    ["", ["ホバークラフト"]],
    ["百物語", ["クロカゲ"]],
  ];
</script>

<div class="p-4">
  {#each bosses as [group, members]}
    <section class="bg-slate-200 mb-4 last:mb-0">
      <h2 class="h-8 p-1 font-bold bg-slate-100">{group}</h2>
      <div class="flex gap-4 p-1">
        {#each members as member}
          <div class="w-48 text-center">
            <div class="bg-slate-400 h-24">
              <img src="#" alt="" />
            </div>
            <p>{member}</p>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style>
</style>
