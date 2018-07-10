INSERT INTO ingredients (name) VALUES ('Green Beans'); --1
INSERT INTO ingredients (name) VALUES ('Tagliatelle'); --2
INSERT INTO ingredients (name) VALUES ('Chicken Breast'); --3
INSERT INTO ingredients (name) VALUES ('Parmesan'); --4
INSERT INTO ingredients (name) VALUES ('Marinara'); --5
INSERT INTO ingredients (name) VALUES ('Spaghetti'); --6
INSERT INTO ingredients (name) VALUES ('Guanciale'); --7
INSERT INTO ingredients (name) VALUES ('Egg'); --8

INSERT INTO pantries (pantry_id, ingredient_id) VALUES (1, 4);
INSERT INTO pantries (pantry_id, ingredient_id) VALUES (1, 8);
INSERT INTO pantries (pantry_id, ingredient_id) VALUES (1, 6);
INSERT INTO pantries (pantry_id, ingredient_id) VALUES (1, 7);

INSERT INTO recipes (name, author, instructions) 
VALUES('Chicken Parmesan', 'Sam Rowland', 'DO THE THING!'); --1
INSERT INTO recipes (name, author, instructions) 
VALUES('Spaghetti Carbonara', 'Sam Rowland', 'DO THE THING!'); --2

INSERT INTO ingredients_recipes_join (ingredient_id, recipe_id, amount, unit)
VALUES(3, 1, 1, 'pound');
INSERT INTO ingredients_recipes_join (ingredient_id, recipe_id, amount, unit)
VALUES(4, 1, 0.25, 'cup');
INSERT INTO ingredients_recipes_join (ingredient_id, recipe_id, amount, unit)
VALUES(5, 1, 2, 'cup');
INSERT INTO ingredients_recipes_join (ingredient_id, recipe_id, amount, unit)
VALUES(6, 1, 8, 'ounce');

INSERT INTO ingredients_recipes_join (ingredient_id, recipe_id, amount, unit)
VALUES(7, 2, 0.25, 'pound');
INSERT INTO ingredients_recipes_join (ingredient_id, recipe_id, amount, unit)
VALUES(4, 2, 0.25, 'cup');
INSERT INTO ingredients_recipes_join (ingredient_id, recipe_id, amount, unit)
VALUES(5, 2, 2, null);
INSERT INTO ingredients_recipes_join (ingredient_id, recipe_id, amount, unit)
VALUES(6, 2, 8, 'ounce');