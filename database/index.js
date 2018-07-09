const { Client } = require('pg');

const client = new Client({
  database: 'pantry',
});
client.connect();

const addIngredient = (ingredient) => {
  console.log(ingredient);
  const selectIds = `SELECT id, name ingredients WHERE name=${ingredient});`;
  // return client.query(selectIds)
};

const getPantry = (pantryId) => {
  const selectPantry = `
    SELECT
    i.id as ingredient_id,
    i.name
    FROM pantries p
    JOIN ingredients i
    ON p.ingredient_id = i.id
    WHERE p.pantry_id=${pantryId};
  `;

  return client.query(selectPantry);
}

module.exports = {
  addIngredient,
  getPantry,
}