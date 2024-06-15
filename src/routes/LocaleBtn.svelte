<script>
  export let locale;
</script>

<a
  href="/{locale.toLowerCase()}"
  class="rounded-full border-2 text-center flex flex-col justify-center items-center w-24 h-24 text-white bg-slate-500 border-white"
>
  <h2 class="text-xl"><slot /></h2>
  <span class="text-xs">{locale.toUpperCase()}</span>
</a>
