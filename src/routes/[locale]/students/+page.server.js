/** @type {import('@sveltejs/kit').ServerLoad} */
export const load = async ({ locals, params }) => {
  const { locale } = params;

  /** @type {import('pg').QueryConfig} */
  const query = {
    text: `SELECT *, unit.name, unit.outfit FROM "unit" 
    INNER JOIN "student" ON unit.name = student.name_jpn
    LEFT JOIN (SELECT uta.name, uta.outfit, ARRAY_AGG(affinity ORDER BY value ASC) AS indoor_affinity 
      FROM "unit_terrain_affinity" uta INNER JOIN "terrain_affinity" ta ON uta.affinity = ta.name 
      WHERE terrain = '屋内戦' GROUP BY uta.name, uta.outfit) indoor
      ON unit.name = indoor.name AND unit.outfit = indoor.outfit 
    LEFT JOIN (SELECT uta.name, uta.outfit, ARRAY_AGG(affinity ORDER BY value ASC) AS field_affinity 
      FROM "unit_terrain_affinity" uta INNER JOIN "terrain_affinity" ta ON uta.affinity = ta.name 
      WHERE terrain = '屋外戦' GROUP BY uta.name, uta.outfit) field
      ON unit.name = field.name AND unit.outfit = field.outfit
    LEFT JOIN (SELECT uta.name, uta.outfit, ARRAY_AGG(affinity ORDER BY value ASC) AS city_affinity 
      FROM "unit_terrain_affinity" uta INNER JOIN "terrain_affinity" ta ON uta.affinity = ta.name 
      WHERE terrain = '市街地戦' GROUP BY uta.name, uta.outfit) city
      ON unit.name = city.name AND unit.outfit = city.outfit, 
    LATERAL (SELECT position FROM "weapon_type" WHERE student.weapon_type = weapon_type.name), 
    LATERAL (SELECT name_${locale} AS school FROM "school" WHERE student.school = school.name_jpn),
    LATERAL (SELECT name_${locale} AS club FROM "club" WHERE student.club = club.name_jpn),
    LATERAL (SELECT name_${locale} AS class FROM "class" WHERE unit.class = class.name_jpn),
    LATERAL (SELECT name_${locale} AS attack_type_${locale} FROM "attack_type" WHERE unit.attack_type = attack_type.name_jpn),
    LATERAL (SELECT name_${locale} AS defense_type_${locale} FROM "defense_type" WHERE unit.defense_type = defense_type.name_jpn),
    LATERAL (SELECT name_${locale} AS outfit_${locale} FROM "outfit" WHERE unit.outfit = outfit.name_jpn),
    LATERAL (SELECT name_${locale} AS equipment_first FROM "equipment_first" WHERE unit.equipment_first = equipment_first.name_jpn),
    LATERAL (SELECT name_${locale} AS equipment_second FROM "equipment_second" WHERE unit.equipment_second = equipment_second.name_jpn),
    LATERAL (SELECT name_${locale} AS equipment_third FROM "equipment_third" WHERE unit.equipment_third = equipment_third.name_jpn),
    LATERAL (SELECT name_${locale} AS recruit FROM "recruit_type" WHERE unit.recruit = recruit_type.name_jpn),
    LATERAL (SELECT romaji AS surname_romaji FROM "surname" WHERE student.surname_kanji = surname.kanji AND student.surname_kana = surname_kana)
    ORDER BY unit.release_date DESC, student.school ASC, student.club ASC, unit.name ASC`,
  };

  /** @type {import('pg').Client} */
  const client = locals.client;

  await client.connect();
  const res = await client.query(query);
  await client.end();

  return { rows: res.rows };
};

// order by unit.outfit
// filter, prepared statements
