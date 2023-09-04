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
      <h2 className='head'>{editRecipe ? 'Edit Recipe' : 'Submit a New Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <div>

          <div>
            <label>Title:</label>
          </div>
          <div>
            
            <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} />
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

            <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
          </div>
          <div>
          <button type="submit">{editRecipe ? 'Update Recipe' : 'Submit Recipe'}</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipeForm;
