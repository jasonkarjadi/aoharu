<script>
  import LocaleBtn from "./LocaleBtn.svelte";
</script>

<div
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 rounded py-16 px-24 bg-neutral-700"
>
  <img src="/bluearchive.png" alt="青春" />
  <div class="flex gap-4">
    <LocaleBtn locale="jpn">日本語</LocaleBtn>
    <LocaleBtn locale="eng">English</LocaleBtn>
  </div>
</div>
