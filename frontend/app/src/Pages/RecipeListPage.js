
import React, { useState } from 'react';
import CreateRecipeForm from './CreateRecipeForm';
import './RecipeListPage.css';

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleRecipeSubmit = (newRecipe) => {
    if (editIndex !== null) {
      const updatedRecipes = [...recipes];
      updatedRecipes[editIndex] = newRecipe;
      setRecipes(updatedRecipes);
      setEditIndex(null);
    } else {
      setRecipes([...recipes, newRecipe]);
    }
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="recipe-list-page">
      <CreateRecipeForm onSubmit={handleRecipeSubmit} editRecipe={editIndex !== null ? recipes[editIndex] : null} />
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Instructions: {recipe.instructions}</p>
            <button onClick={() => handleEditClick(index)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeListPage;