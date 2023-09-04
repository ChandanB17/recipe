// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();

// // Connect to MongoDB using Mongoose
// mongoose.connect('mongodb://localhost/recipes', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

// // Define MongoDB Schema and Model for recipes
// const recipeSchema = new mongoose.Schema({
//   title: String,
//   ingredients: [String],
//   instructions: String,
// });

// const Recipe = mongoose.model('Recipe', recipeSchema);

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Create API endpoints for CRUD operations

// // Create a new recipe
// app.post('/api/recipes', async (req, res) => {
//   try {
//     const newRecipe = await Recipe.create(req.body);
//     res.json(newRecipe);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while creating the recipe.' });
//   }
// });

// // Get all recipes
// app.get('/api/recipes', async (req, res) => {
//   try {
//     const recipes = await Recipe.find();
//     res.json(recipes);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching recipes.' });
//   }
// });

// // Get a specific recipe by ID
// app.get('/api/recipes/:id', async (req, res) => {
//   try {
//     const recipe = await Recipe.findById(req.params.id);
//     if (!recipe) {
//       res.status(404).json({ error: 'Recipe not found.' });
//       return;
//     }
//     res.json(recipe);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching the recipe.' });
//   }
// });

// // Update a recipe by ID
// app.put('/api/recipes/:id', async (req, res) => {
//   try {
//     const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedRecipe) {
//       res.status(404).json({ error: 'Recipe not found.' });
//       return;
//     }
//     res.json(updatedRecipe);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while updating the recipe.' });
//   }
// });

// // Delete a recipe by ID
// app.delete('/api/recipes/:id', async (req, res) => {
//   try {
//     const deletedRecipe = await Recipe.findByIdAndRemove(req.params.id);
//     if (!deletedRecipe) {
//       res.status(404).json({ error: 'Recipe not found.' });
//       return;
//     }
//     res.json({ message: 'Recipe deleted successfully.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while deleting the recipe.' });
//   }
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
