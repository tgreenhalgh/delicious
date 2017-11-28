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
  const store = await new Store(req.body).save();
  // new Store(req.body) creates the store
  // .save() saves it, which returns a promise
  // await that. the response from await is saved into `store` variable
  // because save() is back, the slug is created, so can use in the redirect below
  req.flash(
    'success',
    `Successfully created ${store.name}. Care to leave a review?`,
  );
  res.redirect(`/store/${store.slug}`);
};
