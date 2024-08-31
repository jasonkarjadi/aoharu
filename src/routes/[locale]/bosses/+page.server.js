import { supabase } from "$lib/supabaseClient.js";

/** @type {import('@sveltejs/kit').ServerLoad} */
export const load = async ({ params }) => {
  const { locale } = params;
  const { data, error } = await supabase.rpc(
    "group_boss",
    { locale },
    { get: true }
  );

  return { groups: data ?? [], error };
};
