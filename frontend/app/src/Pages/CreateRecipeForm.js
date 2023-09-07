import React, { useState } from 'react';
import axios from 'axios';
import './CreateRecipeForm.css';

const CreateRecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      instructions,
    };

    try {
      await axios.post('/api/recipes', newRecipe);
      onSubmit();
      setTitle('');
      setIngredients('');
      setInstructions('');
    } catch (error) {
      console.error('Error submitting recipe:', error.response.data); // Log the error
      // You can also display an error message to the user here if needed
    }
    
  };

  return (
    <div className="create-recipe-form">
      <h2 className="head">Submit a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Title:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Recipe Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label>Ingredients:</label>
          </div>
          <div>
            <textarea
              placeholder="Ingredients (comma-separated)"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>

          <div>
            <label>Instructions:</label>
          </div>
          <div>
            <textarea
              placeholder="Instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>

          <div>
            <button type="submit">Submit Recipe</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipeForm;
