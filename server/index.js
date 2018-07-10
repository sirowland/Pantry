const express = require('express');
const path = require('path');
const db = require('../database');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/pantry/:id', express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());

app.get('/api/pantry/:id', (req, res) => {
  db.getPantry(req.params.id)
    .then(results => res.send(results.rows))
});

app.delete('/api/pantry/:id/:ingredientId', (req, res) => {
  db.deletePantryEntry(req.params.id, req.params.ingredientId)
    .then(() => res.send())
});

app.post('/api/pantry/:id', (req, res) => {
  db.addPantryEntry(req.params.id, req.body.name)
    .then(() => res.send());
});

app.get('/api/pantry/:id/recipes', (req, res) => {
  db.getRecipesInOrder(req.params.id)
    .then(results => res.send(results));
});

app.put('/api/pantry/:id/:ingredientId', (req, res) => {
  db.updatePantryEntry(req.params.ingredientId, req.body.name)
    .then(() => res.send());
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
