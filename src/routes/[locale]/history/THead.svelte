<script>
  import { mmdds, leapmmdds } from "$lib/constants.js";
  //   export let rows;
  //   const years = Array.from(
  //     new Set(
  //       rows.flatMap(({ date }) =>
  //         Array.isArray(date)
  //           ? date.map((x) => x.getFullYear())
  //           : date.getFullYear()
  //       )
  //     )
  //   );
  let years = [2021, 2022, 2023, 2024];
</script>

<thead class="sticky top-0 dark:bg-[rgb(43,68,101)] dark:text-neutral-50">
  <tr>
    {#each years as year, idx (year)}
      <th
        class="border border-black px-1 py-2 {idx % 2
          ? 'bg-zinc-300'
          : 'bg-slate-200'}"
        colspan={365 + !(year % 4)}
      >
        <ruby class="sticky inset-x-2 top-1/2">
          {year}
          <rt class="relative top-0.5">
            {new Date(`${year}`).toLocaleDateString("ja-JP-u-ca-japanese", {
              year: "numeric",
            })}
          </rt>
        </ruby>
      </th>
    {/each}
  </tr>
  <tr>
    {#each years as year, idx (year)}
      {#each !(year % 4) ? leapmmdds : mmdds as [month, days]}
        <th
          class="border border-black px-1 py-2 {idx % 2
            ? 'bg-zinc-300'
            : 'bg-slate-200'}"
          colspan={days}
        >
          <ruby class="sticky inset-x-2 top-1/2">
            {month}月<rt class="relative top-0.5 uppercase">
              {Intl.DateTimeFormat("en", {
                month: "short",
              }).format(new Date(`${month}`))}
            </rt>
          </ruby>
        </th>
      {/each}
    {/each}
  </tr>
  <tr class="text-xs">
    {#each years as year, idx (year)}
      {#each !(year % 4) ? leapmmdds : mmdds as [_, days]}
        {#each Array(days).fill() as _, date}
          <th
            class="border border-black w-10 {idx % 2
              ? 'bg-zinc-300'
              : 'bg-slate-200'}"
          >
            {`${++date}`.padStart(2, "0")}
          </th>
        {/each}
      {/each}
    {/each}
  </tr>
</thead>
