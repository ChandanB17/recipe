// Recipe.js

const mongoose = require('mongoose');

// Define Recipe Schema
const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

// Create Recipe Model
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
