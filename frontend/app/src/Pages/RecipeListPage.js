import React, { useState, useEffect } from 'react';
import CreateRecipeForm from './CreateRecipeForm';
import './RecipeListPage.css';
import axios from 'axios';

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error loading recipes:', error);
    }
  };

  const handleRecipeSubmit = () => {
    loadRecipes();
  };

  return (
    <div className="recipe-list-page">
      <CreateRecipeForm onSubmit={handleRecipeSubmit} />
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Instructions: {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeListPage;
