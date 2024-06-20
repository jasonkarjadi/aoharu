<script>
  export let locale;
</script>

<a
  href="/{locale.toLowerCase()}"
  class="rounded-full border text-center flex flex-col justify-center items-center size-16 text-white bg-slate-500 border-white hover:bg-slate-500/75"
>
  <p class="border-b text-sm"><slot /></p>
  <span class="uppercase text-[10px] leading-none">{locale}</span>
</a>
