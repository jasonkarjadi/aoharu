<script>
  import LocaleBtn from "./LocaleBtn.svelte";
</script>

<div
  class="bg-[url('/webassets/character_bk.png')] bg-center w-screen xl:w-[calc(100vw-17px)] h-dvh flex justify-center items-center"
>
  <div class="rounded py-8 px-8 w-72 bg-neutral-700">
    <div class="flex justify-center items-center pb-4">
      <img src="/webassets/bluearchive.png" alt="青春" />
    </div>
    <div class="flex gap-4 justify-center">
      <LocaleBtn locale="jpn">日本語</LocaleBtn>
      <LocaleBtn locale="eng">English</LocaleBtn>
    </div>
  </div>
</div>
