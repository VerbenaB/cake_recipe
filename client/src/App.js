import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [recipe, setRecipe] = useState('');



  useEffect(() => {
    fetch("http://localhost:5000")
    .then(res => res.json())
    .then(data => setRecipe(data))
  }, [])

  if (!recipe){
    return null
  }

  return (
    <>
    <div className="App">
      <img />
      <article className="recipe">
      <h1 >{recipe.title}</h1>
      <ul id="recipe-details">
      </ul>
      </article>
      </div>
      <div className="App">
      <article className="ingredients">
        <h1>Ingredients</h1>
        <ul id="ingredients">
          {recipe.ingredients.map((ingredient, index) => {
              return (<li key={index}>{ingredient}</li>)
          })}
        </ul>
      </article>
      </div>
      </>
  );
}

export default App;
