<script>
  import { page } from "$app/stores";

  export let link;
  let href = `/${$page.params.locale}/${link}`;
</script>

<a
  {href}
  class="h-full px-8 text-sm text-white flex items-center justify-center {$page
    .url.pathname === href && 'shadow-[inset_0_4px_rgb(8,212,252)]'}"
>
  <slot />
</a>
