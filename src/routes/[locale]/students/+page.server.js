/** @type {import('@sveltejs/kit').ServerLoad} */
export const load = async ({ locals }) => {
  /** @type {import('pg').Client} */
  const client = locals.client;

  await client.connect();
  const res = await client.query(
    `SELECT *, unit.name, unit.outfit FROM "unit" 
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
    LATERAL (SELECT position FROM "weapon_type" WHERE student.weapon_type = weapon_type.name)
    ORDER BY unit.release_date DESC, student.school ASC, student.club ASC`
  );
  await client.end();

  return { rows: res.rows };
};

// order by unit.name, unit.outfit
// filter, prepared statements
