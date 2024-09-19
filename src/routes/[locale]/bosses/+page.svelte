<script>
  import BossType from "./BossType.svelte";

  export let data;
  let { groups, error } = data;
  $: error && console.error(error);
</script>

<div class="p-4 flex gap-x-px text-slate-100">
  {#each groups as group (group.id)}
    <section>
      <h2
        class="py-2 text-center mb-2 font-bold uppercase bg-slate-700 rounded text-xl"
      >
        {group.name ?? " "}
      </h2>
      <div class="w-fit p-2 bg-slate-200/75 rounded mx-2">
        {#each group.bosses as boss (boss.id)}
          <div
            class="rounded-lg border border-white shadow-[0_2px_black] relative mb-2 pr-36 bg-contain bg-no-repeat bg-slate-100"
            style="background-image: url(/bosses/{boss.id}BG.png);"
          >
            <div class="w-96 relative translate-x-1/3">
              <img src="/bosses/{boss.id}.png" alt="" />
            </div>
            <div class="absolute left-2 right-1 bottom-1">
              <h3
                class="uppercase text-3xl font-bold [text-shadow:0_0_1px_black] italic"
              >
                {boss.name}
              </h3>
              <div class="flex gap-x-0.5 mb-1 justify-end">
                {#each boss.terrain_ids as terrain_id (terrain_id)}
                  <div class="w-8">
                    <img src="/cropped/terrains/{terrain_id}.png" alt="" />
                  </div>
                {/each}
              </div>
              <div
                class="flex gap-x-0.5 rounded text-center font-medium [text-shadow:0_0_1px_black] justify-end"
              >
                <BossType type={boss.attack} />
                <BossType type={boss.defense} />
              </div>
            </div>
            <div
              class="absolute bg-slate-700/50 hover:bg-transparent inset-0 z-10 rounded-lg"
            />
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>
