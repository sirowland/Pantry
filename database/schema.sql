DROP TABLE IF EXISTS ingredients_recipes_join;
DROP TABLE IF EXISTS pantries;
DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS recipes;

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  author VARCHAR(50),
  instructions VARCHAR(5000)
);

CREATE TABLE pantries (
  row_id SERIAL PRIMARY KEY,
  pantry_id INT,
  ingredient_id INT,
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

CREATE TABLE ingredients_recipes_join (
  id SERIAL PRIMARY KEY,
  ingredient_id INT,
  recipe_id INT,
  amount DECIMAL,
  unit VARCHAR(10),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE INDEX pantry_idx ON pantries(pantry_id);
CREATE INDEX ingred_idx ON ingredients_recipes_join(ingredient_id);
CREATE INDEX recipe_idx ON ingredients_recipes_join(recipe_id);