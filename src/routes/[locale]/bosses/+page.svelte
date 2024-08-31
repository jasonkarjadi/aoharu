<script>
  export let data;
  let { groups, error } = data;
  $: error && console.error(error);
</script>

<div class="p-4 overflow-x-auto">
  {#each groups as group (group.id)}
    <section class="bg-slate-200 mb-4 last:mb-0 rounded">
      <h2 class="h-8 py-1 px-2 font-bold uppercase bg-slate-100 rounded-t">
        {group.name ?? ""}
      </h2>
      <div class="flex gap-8 px-8 py-1">
        {#each group.bosses as boss (boss.id)}
          <div class="pl-20 bg-slate-400 relative">
            <div class="w-80">
              <img src="/bosses/{boss.id}.png" alt="" />
              <div class="absolute bg-slate-700/50 inset-0 z-10">
                <h3
                  class="uppercase text-2xl absolute top-1 left-1 z-20 font-bold [text-shadow:0_0_1px_white]"
                >
                  {boss.name}
                </h3>
              </div>
              <div class="absolute bottom-1 right-1 z-20">
                <div
                  class="flex gap-x-px bg-slate-200 p-px border border-slate-700 w-16 mb-px ml-auto"
                >
                  <div class="size-6 bg-slate-200">
                    <img src="#" alt="" />
                  </div>
                  <div class="size-6 bg-slate-200">
                    <img src="#" alt="" />
                  </div>
                </div>
                <div
                  class="flex gap-x-px bg-slate-200 p-px border border-slate-700 text-white [text-shadow:0_0_1px_black]"
                >
                  <div class="flex">
                    <div class="w-6 bg-slate-400"></div>
                    <p class="px-2 py-px {boss.attack_type.id}">
                      {boss.attack_type.name}
                    </p>
                  </div>
                  <div class="flex">
                    <div class="w-6 bg-slate-400"></div>
                    <p class="px-2 py-px {boss.defense_type.id}">
                      {boss.defense_type.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- <p class="uppercase">{boss.name}</p> -->
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style>
  .\31 {
    background-color: #86000b;
  }
  .\32 {
    background-color: #bb7d10;
  }
  .\33 {
    background-color: #1f6095;
  }
  .\34 {
    background-color: #9743a3;
  }
</style>
