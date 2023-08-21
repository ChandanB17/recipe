import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const API_KEY = '17041a4ddf19430db0f13105e2afb3f5';
const breakfastQuery = 'breakfast';

// ... (import statements)

const Breakfast = () => {
  const [breakfastItems, setBreakfastItems] = useState([]);

  useEffect(() => {
    // Fetch breakfast recipes from Spoonacular API
    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          apiKey: API_KEY,
          query: breakfastQuery,
          cuisine: 'American',
          mealType: 'breakfast',
          number: 18,
          instructionsRequired: true // Include recipes with instructions
        }
      })
      .then(response => {
        const recipes = response.data.results;
        console.log('Fetched recipes:', recipes); // Log fetched data
        setBreakfastItems(recipes.map(recipe => ({ ...recipe, showInstructions: false })));
      })
      .catch(error => {
        console.error('Error:', error); // Log any errors
      });
  }, []);

  const toggleInstructions = index => {
    const updatedItems = [...breakfastItems];
    updatedItems[index].showInstructions = !updatedItems[index].showInstructions;
    setBreakfastItems(updatedItems);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center">Breakfast Menu</h1>
      <Row className="mt-4">
        {breakfastItems.map((item, index) => (
          <Col key={index} md="4" className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.summary}</Card.Text>
                {item.showInstructions && item.analyzedInstructions && item.analyzedInstructions.length > 0 ? (
                  <div>
                    <h5>Instructions:</h5>
                    <ol>
                      {item.analyzedInstructions[0].steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step.step}</li>
                      ))}
                    </ol>
                  </div>
                ) : (
                  <Button onClick={() => toggleInstructions(index)}>Show Instructions</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Breakfast;
