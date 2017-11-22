const mongoose = require('mongoose');
const Store = mongoose.model('Store'); // mongoose is a singleton, so don't have to re-require (was required in start.js)

exports.homePage = (req, res) => {
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
  // req.body is OK, because using a `strict` schema - will only take what's on the schema
  const store = new Store(req.body);
  await store.save();
  res.redirect('/');
};
