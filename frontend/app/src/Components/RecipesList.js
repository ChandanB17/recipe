import React, { useState, useEffect } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const apiKey = '17041a4ddf19430db0f13105e2afb3f5';
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`);
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.instructions}</p>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;