import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = '17041a4ddf19430db0f13105e2afb3f5';

const SearchComponent = ({ onSearch }) => {
  const [keywords, setKeywords] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  const handleSearch = () => {
    const searchCriteria = {
      keywords,
      ingredients,
      cuisine,
      dietaryRestrictions,
    };
    onSearch(searchCriteria);
  };

  return (
    <div className="my-4">
      <h3>Recipe Search</h3>
      <input
        type="text"
        placeholder="Keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dietary Restrictions"
        value={dietaryRestrictions}
        onChange={(e) => setDietaryRestrictions(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const Breakfast = () => {
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    keywords: '',
    ingredients: '',
    cuisine: '',
    dietaryRestrictions: '',
  });

  useEffect(() => {
    const apiParams = {
      apiKey: API_KEY,
      query: searchCriteria.keywords,
      cuisine: searchCriteria.cuisine,
      mealType: 'breakfast', // Specify the meal type as 'breakfast'
      number: 18,
    };

    if (searchCriteria.ingredients) {
      apiParams.ingredients = searchCriteria.ingredients;
    }
    if (searchCriteria.dietaryRestrictions) {
      apiParams.diet = searchCriteria.dietaryRestrictions;
    }

    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: apiParams,
      })
      .then(async (response) => {
        const recipes = response.data.results;
        // Fetch instructions for each recipe
        const recipePromises = recipes.map(async (recipe) => {
          const instructionsResponse = await axios.get(
            `https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions`,
            {
              params: {
                apiKey: API_KEY,
              },
            }
          );
          const instructions = instructionsResponse.data;
          return {
            ...recipe,
            showInstructions: false,
            instructions: instructions.length > 0 ? instructions[0].steps : [],
          };
        });
        Promise.all(recipePromises).then((recipesWithInstructions) => {
          setBreakfastItems(recipesWithInstructions);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [searchCriteria]);

  const toggleInstructions = (index) => {
    const updatedItems = [...breakfastItems];
    updatedItems[index].showInstructions = !updatedItems[index].showInstructions;
    setBreakfastItems(updatedItems);
  };

  return (
    <Container className="my-5">
      <SearchComponent onSearch={setSearchCriteria} />

      <h1 className="text-center">Breakfast Menu</h1>
      <Row className="mt-4">
        {breakfastItems.map((item, index) => (
          <Col key={index} md="4" className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={item.image} className="recipe-image" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.summary}</Card.Text>
                <div className="button-wrapper">
                  {item.showInstructions && item.instructions.length > 0 ? (
                    <div className="instructions">
                      <h5>Instructions:</h5>
                      <ol>
                        {item.instructions.map((step, stepIndex) => (
                          <li key={stepIndex}>{step.step}</li>
                        ))}
                      </ol>
                    </div>
                  ) : (
                    <div className="show-instructions-btn">
                      <Button onClick={() => toggleInstructions(index)}>Show Instructions</Button>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Breakfast;
