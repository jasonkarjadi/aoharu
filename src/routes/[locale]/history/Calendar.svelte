<script>
  // export let year;
  // let isLeapYear = year % 4 === 0;

  const days31 = [1, 3, 5, 7, 8, 10, 12];
  // const days30 = [4, 6, 9, 11];
  const mmdds = Array(12)
    .fill(null)
    .map((_, idx) => [++idx, idx === 2 ? 29 : days31.includes(idx) ? 31 : 30]);
</script>

<table class="w-max border">
  <thead>
    <!-- <tr>
      <th colspan="2">日付</th>
      <th colspan="4">募集</th>
      <th>イベント・ストーリー</th>
      <th>総力戦・大決戦・合同火力演習</th>
      <th>戦術対抗戦</th>
      <th>制約解除大戦</th>
    </tr> -->
    <tr>
      {#each mmdds as [month, days] (month)}
        <th class="border" colspan={days}>{month}月</th>
      {/each}
    </tr>
    <tr>
      {#each mmdds as [month, days] (month)}
        {#each Array(days).fill(null) as _, date (date)}
          {@const isDark = month === 2 && ++date === 29}
          <th class="border w-6" class:bg-neutral-500={isDark}>
            {date < 10 ? "0" : ""}{date}
          </th>
        {/each}
      {/each}
    </tr>
  </thead>
  <tbody>
    <!-- <tr>
      <td>2月</td>
      <td>mm/dd -- mm/dd</td>
      <td><img src="#" alt="" /><span>student name</span></td>
      <td><img src="#" alt="" /><span></span></td>
    </tr> -->
    <tr></tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
  </tbody>
</table>
