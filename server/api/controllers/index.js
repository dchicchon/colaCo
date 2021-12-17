const { Soda, Transaction } = require('../models');

module.exports = {
  getSodas: (req, res) => {
    Soda.findAll().then((sodas) => {
      res.json(sodas);
    }).catch((err) => {
      res.status(500);
      res.json(err);
    });
  },

  buySoda: async (req, res) => {
    await Soda.decrement('quantity', { where: { id: req.body.id } });
    const result = await Soda.findOne({ where: { id: req.body.id } });
    const date = new Date();
    const transaction = {
      label: result.label,
      price: result.price,
      time: date,
    };
    const soda = {
      id: result.id,
      label: result.label,
    };
    await Transaction.create(transaction);
    res.json(soda);
  },

  updateSoda: (req, res) => {
    Soda.update(req.body, { where: { id: req.params.id } }).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(500);
      res.json(err);
    });
  },

  createSoda: (req, res) => {
    Soda.create(req.body).then((soda) => {
      res.json(soda);
    }).catch((err) => {
      res.status(500);
      res.json(err);
    });
  },

  deleteSoda: (req, res) => {
    Soda.destroy({ where: { id: req.params.id } }).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(500);
      res.json(err);
    });
  },

  getTransactions: (req, res) => {
    Transaction.findAll().then((transactions) => {
      res.json(transactions);
    }).catch((err) => {
      res.status(500);
      res.json(err);
    });
  },
};
