import './App.css';
import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import RecipeComponent from './components/RecipeComponent';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {
   getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch("https://api.edamam.com/search?q=chicken&app_id=8ca6e7bb&app_key=0ec1b9dddf5ec67cbbbd785e245f9318");
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }



  return (

    <div className="App">
      <SearchForm />

      {recipes.map((recipe) => (
        <RecipeComponent image={recipe.recipe.image} title={recipe.recipe.label} calories={recipe.recipe.calories} ingredients={recipe.recipe.calories} 
        />
      ))} 
    </div>
  );
}

export default App;
