import React, { useState } from 'react';
import './CreateRecipeForm.css';

const CreateRecipeForm = ({ onSubmit, editRecipe }) => {
  const [title, setTitle] = useState(editRecipe ? editRecipe.title : '');
  const [ingredients, setIngredients] = useState(editRecipe ? editRecipe.ingredients.join(', ') : '');
  const [instructions, setInstructions] = useState(editRecipe ? editRecipe.instructions : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      instructions,
    };
    onSubmit(newRecipe);
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="create-recipe-form">
      <h2>{editRecipe ? 'Edit Recipe' : 'Submit a New Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea
          placeholder="Ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        <button type="submit">{editRecipe ? 'Update Recipe' : 'Submit Recipe'}</button>
      </form>
    </div>
  );
};

export default CreateRecipeForm;
