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
  return client.query(`UPDATE ingredients SET name='${ingredientName}' WHERE id=${ingredientId}`);
};

const getRecipesInOrder = (pantryId) => {
  let order;

  return client.query(`SELECT ingredient_id FROM pantries WHERE pantry_id=${pantryId}`)
    .then((results) => {
      const ingredientsIdStr = results.rows.map(ingredient => ingredient.ingredient_id).join(',');
      return client.query(`
        SELECT
          recipe_id,
          count(*) as ingredient_count
        FROM ingredients_recipes_join 
        WHERE ingredient_id in (${ingredientsIdStr})
        GROUP BY recipe_id
        ORDER BY ingredient_count desc
      `);
    })
    .then((results) => {
      order = results.rows;
      const recipeIdsStr = results.rows.map(recipeStats => recipeStats.recipe_id).join(',');
      return client.query(`
      SELECT p.recipe_id, i.name as ingredient_name, p.amount, p.unit, r.name, r.author, r.instructions 
      FROM ingredients_recipes_join p
      JOIN recipes r
      ON p.recipe_id = r.id
      JOIN ingredients i
      ON p.ingredient_id = i.id
      WHERE p.recipe_id in (${recipeIdsStr})
      `);
    })
    .then((results) => {
      const result = [];

      order.forEach((recipeStat) => {
        const object = {};
        object.recipeId = recipeStat.recipe_id;
        object.ingredientPossessionCount = Number(recipeStat.ingredient_count);
        object.name = '';
        object.author = '';
        object.ingredients = [];
        object.instructions = '';

        for (let i = 0; i < results.rows.length; i += 1) {
          const entry = results.rows[i];
          if (entry.recipe_id === recipeStat.recipe_id) {
            object.author = entry.author;
            object.name = entry.name;
            object.instructions = entry.instructions;
            object.ingredients.push({
              name: entry.ingredient_name,
              amount: entry.amount,
              unit: entry.unit,
            });
          }
        }

        result.push(object);
      });
      return result;
    });
};

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
};

const deletePantryEntry = (pantryId, ingredientId) => {
  const deleteEntryQuery = `
    DELETE FROM pantries p 
    WHERE p.pantry_id=${pantryId} 
    AND p.ingredient_id = ${ingredientId} 
  `;

  return client.query(deleteEntryQuery);
};

module.exports = {
  addPantryEntry,
  updatePantryEntry,
  getPantry,
  deletePantryEntry,
  getRecipesInOrder,
};
