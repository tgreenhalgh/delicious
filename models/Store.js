const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // using ES6 promises
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

// do this before saving
storeSchema.pre('save', function(next) {
  // not an => because want `this`
  if (!this.isModified('name')) {
    next(); // skip (move on to next)
    return; // stops the function from running
  }
  this.slug = slug(this.name);
  next();
  // TODO make so don't have dup slugs
});

module.exports = mongoose.model('Store', storeSchema);
