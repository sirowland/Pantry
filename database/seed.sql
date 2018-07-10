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
VALUES('Chicken Parmesan', 'Sam Rowland', 'Pound chicken to flatten. Salt and pepper to taste. Dip chicken in egg then in bread crumbs. Fry in butter in hot skillet, turning and browning for 10 minutes or until chicken is done. Remove from skillet. To skillet add spaghetti sauce. Heat thoroughly. Add chicken. Place slices of mozzarella on top of chicken. Sprinkle with parmesan. Cover and cook until cheese is melted.'); --1
INSERT INTO recipes (name, author, instructions) 
VALUES('Spaghetti Carbonara', 'Sam Rowland', 'Bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions while you start the sauce.Heat a large skillet over medium-high heat and add the oil and pancetta. Cook until the pancetta gets brown and crispy, 3 to 4 minutes. In a bowl, whisk the eggs with the cheese and some salt and pepper. When the spaghetti is done, drain it, reserving some of the cooking water, and add the pasta to the hot pancetta skillet. Toss to coat the pasta with the oil. Remove the skillet from the heat and pour over the egg mixture, tossing quickly so the eggs dont scramble. Add some of the hot cooking water to thin it out and form a sauce. Toss in the parsley. Serve immediately with some extra cheese and a drizzle of olive oil.');

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
VALUES(8, 2, 2, null);
INSERT INTO ingredients_recipes_join (ingredient_id, recipe_id, amount, unit)
VALUES(6, 2, 8, 'ounce');