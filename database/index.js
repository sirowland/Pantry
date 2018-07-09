const { Client } = require('pg');

const client = new Client({
  database: 'pantry',
});
client.connect();

// const addIngredient = (ingredient) => {
//   console.log(ingredient);
//   const selectIds = `SELECT id, name ingredients WHERE name=${ingredient});`;
//   // return client.query(selectIds)
// };

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

const deleteEntry = (pantryId, ingredientId) => {
  const deleteEntryQuery = `
    DELETE FROM pantries p 
    WHERE p.pantry_id=${pantryId} 
    AND p.ingredient_id = ${ingredientId} 
  `;

  return client.query(deleteEntryQuery);
}

module.exports = {
  // addIngredient,
  getPantry,
  deleteEntry,
}