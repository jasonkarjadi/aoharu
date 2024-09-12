import { supabase } from "$lib/supabaseClient.js";

/** @type {import('@sveltejs/kit').ServerLoad} */
export const load = async ({ params }) => {
  const { locale } = params;
  const { data, error } = await supabase
    .from("student")
    .select(
      `
    id,
    ...student_profile (
      profile_id:id,
      ...student_name (name:name_${locale}), 
      ...student_surname (surname:name_${locale}), 
      school (id, name:name_${locale}),
      ...school_club (club:name_${locale}),
      ...type_weapon (type_weapon:name, ...combat_position (position:name)),
      school_year,
      age_year,
      height_cm,
      birthday
    ),
    outfit:student_outfit (id, name:name_${locale}),
    ...combat_role (role:name),
    class_first:class_first_id (id, name:name_${locale}),
    class_second:class_second_id (id, name:name_${locale}),
    attack:type_attack (id, name:name_${locale}),
    defense:type_defense (id, name:name_${locale}),
    cover,
    equipment_first (id, name:name_${locale}),
    equipment_second (id, name:name_${locale}),
    equipment_third (id, name:name_${locale}),
    ...type_recruitment (recruitment:name_${locale}),
    rarity,
    release_date_jpn,
    street_affinity:street_affinity_id (id, name),
    outdoor_affinity:outdoor_affinity_id (id, name),
    indoor_affinity:indoor_affinity_id (id, name),
    favourite,
    upgrade:student_weapon_tier_three_terrain (terrain_id, terrain_affinity (id, name)),
    artifact:student_artifact (first:artifact_first_id (id, name:name_${locale}), second:artifact_second_id (id, name:name_${locale})))
  `
    )
    .order("id");

  return {
    students:
      data?.map((student) => {
        switch (student.upgrade?.terrain_id) {
          case 1:
            student.street_affinity.upgrade = student.upgrade.terrain_affinity;
            break;
          case 2:
            student.outdoor_affinity.upgrade = student.upgrade.terrain_affinity;
            break;
          case 3:
            student.indoor_affinity.upgrade = student.upgrade.terrain_affinity;
            break;
        }
        delete student.upgrade;
        return student;
      }) ?? [],
    error,
  };
};
