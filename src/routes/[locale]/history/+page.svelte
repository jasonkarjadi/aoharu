<script>
  import THead from "./THead.svelte";

  // export let data;
  // let { rows } = data;

  // console.log("rows: ", rows);

  // let rows = [
  //   { date: new Date("2021-02-04"), type: "miscellaneous", image: "....jpg" },
  //   {
  //     date: [new Date("2021-02-04"), new Date("2021-02-11")],
  //     type: "banner",
  //     items: [
  //       { text: "shiroko", image: "....jpg" },
  //       { text: "hoshino", image: "....jpg" },
  //     ],
  //   },
  // ];
  // let a = [
  //   {
  //     date: new Date("2021-02-04"),
  //     items: { miscellaneous: { image: "....jpg" } },
  //   },
  //   {
  //     date: [new Date("2021-02-04"), new Date("2021-02-11")],
  //     items: {
  //       story: {},
  //       banner: [
  //         { text: "shiroko", image: "....jpg" },
  //         { text: "hoshino", image: "....jpg" },
  //       ],
  //     },
  //   },
  // ];
  // let b = {
  //   story: [{ date: new Date() }],
  //   banner: [
  //     { date: new Date(), items: [{ unit: "", image: "" }] },
  //     { date: new Date(), items: [{ unit: ["", ""], image: "" }] },
  //     {
  //       date: new Date(),
  //       items: [
  //         { unit: "", image: "" },
  //         { unit: "", image: "" },
  //         { unit: "", image: "" },
  //         { unit: "", image: "" },
  //       ],
  //     },
  //   ],
  //   event: [{ date: new Date(), title: "", image: "" }],
  //   campaign: [],
  //   raid: [],
  //   pvp: [],
  //   limitbreak: [],
  //   miscellaneous: [],
  // };

  // darken column backgrounds before first date and after last date, add vertical thin line on current date, highlight current month, japan timezone
  // years stack on top of each other // 2024 (front), 2023, 2022, 2021 (back)
  // two boxes up and down, click box to move stack there, table display bottom box
  // animate fade, translate y, transform size, opacity
  // button to spread all years to different tables in one page
  // dates: banner, event, campaigns, limit break, pvp, assault / drill // date: story, receipt, miscellaneous

  // shiroko | fuuka
  // hoshino | haruna
  //         | akari

  let updates = {
    "2021-02-04": [
      { type: "miscellaneous", text: "official JP release", image: "..." },
    ],
    "2021-03-02": [
      {
        type: "recruit",
        text: "spark limit lowered from 300 pulls to 200 pulls",
      },
      { type: "mission", text: "stage 20 unlocked", image: "..." },
    ],
  };
  // let campaigns = {
  //   "2021-02-04": {
  //     "2021-02-13": [
  //       { type: "x", text: "スケジュール", image: "..." },
  //       { type: "x", text: "学園交流会", image: "..." },
  //     ],
  //   },
  //   "2021-02-13": {
  //     "2021-02-20": [{ type: "x", text: "先生レベル経験値", image: "..." }],
  //     "2021-05-20": [
  //       { type: "minigame", text: "目指せ1億！覆面パズル団", image: "..." },
  //     ],
  //   },
  //   "2021-04-29": {
  //     "2021-07-30": [
  //       { type: "minigame", text: "ミレニアムロジック", image: "..." },
  //     ],
  //   },
  // };
  let campaigns = {
    "2021-02-04": {
      "2021-02-13": {
        schedule: {
          type: "double",
          text: "スケジュール　報酬ドロップ量2倍",
          image: "...",
        },
        scrimmage: {
          type: "double",
          text: "学園交流会　報酬ドロップ量2倍",
          image: "...",
        },
      },
    },
    "2021-02-13": {
      "2021-02-20": {
        account_level: {
          type: "double",
          text: "先生レベル経験値2倍",
          image: "...",
        },
      },
      "2021-05-20": {
        outlaw_kivotos: {
          type: "web",
          text: "目指せ1億！覆面パズル団",
          image: "...",
        },
      },
    },
    "2021-04-29": {
      "2021-07-30": {
        millennium_logic: {
          type: "web",
          text: "ミレニアムロジック",
          image: "...",
        },
      },
    },
  };

  let years = [2021, 2022, 2023, 2024];
  let xDate = new Date(`${years[0]}`);
  // date, campaign[], web[]
  let days = Array(
    years.length * 365 + years.filter((year) => !(year % 4)).length
  )
    .fill()
    .map(() => {
      let curr = xDate.toISOString().slice(0, 10);
      xDate.setDate(xDate.getDate() + 1);
      xDate = xDate;
      return [curr, [], []];
    });

  Object.entries(campaigns).forEach(([startDate, endDates]) => {
    let startIdx = days.findIndex(([date, _]) => startDate === date);
    Object.entries(endDates).forEach(([endDate, items]) => {
      let endIdx = days.findIndex(([date, _]) => endDate === date);
      Object.keys(items).forEach((category) => {
        let uid = startDate + category;
        let emptySlotIdx = days[startIdx][1].findIndex((slot) => !slot);
        if (emptySlotIdx === -1) {
          emptySlotIdx = days[startIdx][1].length;
        }
        days.slice(startIdx, endIdx).forEach(([_, slots]) => {
          slots[emptySlotIdx] = uid;
        });
      });
    });
  });
</script>

<div class="mx-4">
  <div class="mt-4 pb-4">
    <table class="w-max break-keep">
      <THead />
      <tbody>
        <!-- popover -->
        <tr id="update" class="break-all">
          {#each days as [date, _]}
            <td id="update{date}" class="border">
              {#if updates[date]}
                {#each updates[date] as item}
                  <p class="bg-slate-600">{item.type}</p>
                {/each}
              {/if}
            </td>
          {/each}
        </tr>
        <tr
          id="campaign"
          class="text-neutral-50"
          style="height: {26 *
            days.reduce((curr, next) =>
              next[1].length > curr[1].length ? next : curr
            ).length +
            4}px;"
        >
          {#each days as [date, slots]}
            <td id="campaign{date}" class="border relative">
              {#if campaigns[date]}
                {#each Object.entries(campaigns[date]) as [endDate, items]}
                  {#each Object.entries(items) as [category, item]}
                    {@const diff =
                      (new Date(endDate) - new Date(date)) / 86400000}
                    {@const slot = slots.findIndex(
                      (slot) => slot === date + category
                    )}
                    <p
                      class="bg-blue-900 px-2 py-1 text-xs absolute left-[calc(50%+1px)]"
                      style="width: {diff * 40 - 2}px; top: {26 * slot + 2}px"
                    >
                      {item.text}
                    </p>
                  {/each}
                {/each}
              {/if}
            </td>
          {/each}
        </tr>
        <tr id="web"></tr>
        <tr id="eventmission"></tr>
        <tr id="banner"></tr>
        <tr id="raid"></tr>
        <tr id="pvp"></tr>
        <tr id="limitbreak"></tr>
      </tbody>
    </table>
  </div>
</div>
