import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import RecipeListHeading from './components/RecipeListHeading';
import AddToFavourites from './components/AddToFavourites';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('apple');

  useEffect(() => {
   getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=8ca6e7bb&app_key=0ec1b9dddf5ec67cbbbd785e245f9318`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const handleInputOnChange = (value) => {
    setSearchValue(value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setQuery(searchValue);
    setSearchValue('');

  }
  console.log(query);

  return (

    <div className="App">
      <SearchForm handleOnChange={handleInputOnChange} handleOnSubmit={handleFormSubmit} searchValue={searchValue}/>
      <div className="results d-flex container">
        <div>
          <RecipeListHeading heading='Recipes'/>
          <RecipeList recipes={recipes} handleFavouriteClick={AddToFavourites}/> 
        </div>
        <div>
          <RecipeListHeading heading='Favourites'/>
        </div>
      </div>
    </div>
  );
}

export default App;
