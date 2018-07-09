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
    .catch(err => console.log('ERROR GETTING PANTRY:', err));
});

app.delete('/api/pantry/:id/:ingredientId', (req, res) => {
  db.deleteEntry(req.params.id, req.params.ingredientId)
    .then(() => res.send())
    .catch(err => console.log('ERROR DELETING INGREDIENT:', err));
});

// app.post('/api/ingredients', (req, res) => {
//   db.addIngredients(req.body)
//     .then(results => console.log(results))

//   res.send();
// });

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
