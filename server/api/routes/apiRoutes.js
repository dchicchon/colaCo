const app = require('express')();
// const path = require('path');
const { createStore } = require('../utils/store');

const db = createStore();

app.get('/sodas', async (req, res) => {
  // this should be a method to get all sodas from our db
  const sodas = await db.models.Soda.findAll();
  res.json(sodas);
});

// This is a post to buy a soda from the user
app.put('/sodas', async (req, res) => {
  await db.models.Soda.decrement('quantity', { where: { id: req.body.id } });
  const result = await db.models.Soda.findOne({ where: { id: req.body.id } });
  const date = new Date();
  const transaction = {
    label: result.label,
    price: result.price,
    time: date,
  };
  await db.models.Transaction.create(transaction);
  res.json(result);
});

module.exports = app;