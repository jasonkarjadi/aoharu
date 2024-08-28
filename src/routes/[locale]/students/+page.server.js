import { supabase } from "$lib/supabaseClient.js";

/** @type {import('@sveltejs/kit').ServerLoad} */
export const load = async ({ params }) => {
  const { locale } = params;
  const { data, error } = await supabase.from("student").select(`
    id,
    student_profile (
      id,
      student_name (name:name_${locale}), 
      student_surname (name:name_${locale}), 
      school (name:name_${locale}),
      school_club (name:name_${locale}),
      type_weapon (name, combat_position (name)),
      school_year,
      age_year,
      height_cm,
      birthday
    ),
    student_outfit (id, name:name_${locale}),
    combat_role (name),
    combat_class (name:name_${locale}),
    type_attack (id, name:name_${locale}),
    type_defense (id, name:name_${locale}),
    cover,
    equipment_first (id, name:name_${locale}),
    equipment_second (id, name:name_${locale}),
    equipment_third (id, name:name_${locale}),
    type_recruitment (name:name_${locale}),
    rarity,
    release_date_jpn
  `);

  return { students: data ?? [], error };
};
