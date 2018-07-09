const { Client } = require('pg');

const client = new Client({
  database: 'pantry',
});
client.connect();

const addPantryEntry = (pantryId, ingredientName) => {
  let ingredientId;

  return client.query(`SELECT id, name FROM ingredients WHERE name='${ingredientName}';`)
    .then(result => {
      ingredientId = result.rows[0] ? result.rows[0].id : undefined;

      if (ingredientId) {
        return client.query(`INSERT INTO pantries (pantry_id, ingredient_id) VALUES (${pantryId},${ingredientId})`)
      } else {
        return client.query(`INSERT INTO ingredients (name) VALUES ('${ingredientName}') RETURNING id`)
          .then((result) => client.query(`INSERT INTO pantries (pantry_id, ingredient_id) VALUES (${pantryId},${result.rows[0].id})`));
      }
    })
};

const updatePantryEntry = (ingredientId, ingredientName) => {
  return client.query(`UPDATE ingredients SET name='${ingredientName}' WHERE id=${ingredientId}`)
}

const getPantry = (pantryId) => {
  const selectPantryQuery = `
    SELECT
    i.id as ingredient_id,
    i.name
    FROM pantries p
    JOIN ingredients i
    ON p.ingredient_id = i.id
    WHERE p.pantry_id=${pantryId};
  `;

  return client.query(selectPantryQuery);
}

const deletePantryEntry = (pantryId, ingredientId) => {
  const deleteEntryQuery = `
    DELETE FROM pantries p 
    WHERE p.pantry_id=${pantryId} 
    AND p.ingredient_id = ${ingredientId} 
  `;

  return client.query(deleteEntryQuery);
}

module.exports = {
  addPantryEntry,
  updatePantryEntry,
  getPantry,
  deletePantryEntry,
}