<script>
  import { page } from "$app/stores";
  import GlobeAlt from "$lib/icons/GlobeAlt.svelte";
  import Moon from "$lib/icons/Moon.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import NavLink from "./NavLink.svelte";

  let isDark = setContext("isDark", writable(false));
</script>

<div class="bg-[url('/webassets/news_bk.png')] bg-fixed bg-center">
  <header
    class="bg-[rgba(20,39,59,.8)] w-screen xl:w-[calc(100vw-17px)] px-16 sticky left-0"
  >
    <div class="flex justify-between h-16">
      <a href="/{$page.params.locale}" class="h-full px-4 flex items-center">
        <img src="/webassets/bluearchive.png" alt="青春" class="h-12" />
      </a>
      <nav class="flex tracking-widest">
        <NavLink link="students">生徒</NavLink>
        <NavLink link="schools">学園</NavLink>
        <NavLink link="logs">履歴</NavLink>
        <NavLink link="bosses">強敵</NavLink>
      </nav>
      <div class="flex w-24 justify-evenly">
        <button
          class="h-full w-10 flex justify-center items-center"
          on:click={() => {
            $isDark = document.querySelector("html").classList.toggle("dark");
          }}
        >
          <Moon />
        </button>
        <button class="h-full w-10 flex justify-center items-center">
          <GlobeAlt />
        </button>
      </div>
    </div>
  </header>
  <slot />
</div>
