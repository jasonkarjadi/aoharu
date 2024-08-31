import { supabase } from "$lib/supabaseClient.js";

/** @type {import('@sveltejs/kit').ServerLoad} */
export const load = async ({ params }) => {
  const { locale } = params;
  const { data, error } = await supabase.from("student").select(`
    id,
    ...student_profile (
      profile_id:id,
      ...student_name (name:name_${locale}), 
      ...student_surname (surname:name_${locale}), 
      ...school (school:name_${locale}),
      ...school_club (club:name_${locale}),
      ...type_weapon (type_weapon:name, ...combat_position (position:name)),
      school_year,
      age_year,
      height_cm,
      birthday
    ),
    outfit:student_outfit (id, name:name_${locale}),
    ...combat_role (role:name),
    ...combat_class (class:name_${locale}),
    type_attack (id, name:name_${locale}),
    type_defense (id, name:name_${locale}),
    cover,
    equipment_first (id, name:name_${locale}),
    equipment_second (id, name:name_${locale}),
    equipment_third (id, name:name_${locale}),
    ...type_recruitment (recruitment:name_${locale}),
    rarity,
    release_date_jpn,
    street_affinity:street_affinity_id (id, name),
    outdoor_affinity:outdoor_affinity_id (id, name),
    indoor_affinity:indoor_affinity_id (id, name)
  `);

  return { students: data ?? [], error };
};
