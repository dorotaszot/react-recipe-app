import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import RecipeListHeading from './components/RecipeListHeading';
import AddToFavourites from './components/AddToFavourites';
import RemoveFromFavourites from './components/RemoveFromFavourites';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('apple');
  const [favourites, setFavourites] = useState([
    {
    "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_efc78b450655c26cf4819f87dab2987c",
        "label": "Apple Elixir Recipe",
        "image": "https://www.edamam.com/web-img/efe/efe1546ab8593aaa62ed4fac11838f35.jpg",
        "url": "http://www.seriouseats.com/recipes/2014/09/apple-elixir-cocktail-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/apple-elixir-recipe-efc78b450655c26cf4819f87dab2987c/apple",
        "ingredients": [
            {
                "text": "4 cups fresh apple cider",
                "weight": 992.0,
                "image": "https://www.edamam.com/food-img/324/32497d8cd6291a6f03acc032e1da7676.jpg"
            },
            {
                "text": "2 cinnamon sticks",
                "weight": 5.2,
                "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
            },
            {
                "text": "4 allspice berries, whole",
                "weight": 7.6,
                "image": "https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg"
            },
            {
                "text": "1 teaspoon cloves, whole",
                "weight": 2.1,
                "image": "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg"
            },
            {
                "text": "2 teaspoons black peppercorns, whole",
                "weight": 5.8,
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "2 ounces Laird's Bonded Apple Brandy",
                "weight": 56.69904625,
                "image": null
            },
            {
                "text": "1 ounce apple cider concentrate syrup",
                "weight": 28.349523125,
                "image": "https://www.edamam.com/food-img/ced/ced25c45453a118e531c8aaf33e2ee38.jpg"
            },
            {
                "text": "1/2 ounce freshly squeezed lemon juice from about half a lemon",
                "weight": 14.1747615625,
                "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
            },
            {
                "text": "4 ounces hard cider such as Samuel Smith’s Organic Cider",
                "weight": 113.3980925,
                "image": "https://www.edamam.com/food-img/324/32497d8cd6291a6f03acc032e1da7676.jpg"
            },
            {
                "text": "Apple slice or apple chip for garnish (optional)",
                "weight": 182.0,
                "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
            }
        ]
    }},
  
    {
      "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
          "label": "Chicken Vesuvio",
          "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
          "source": "Serious Eats",
          "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
          "shareAs": "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken",
          "yield": 4.0,
          "dietLabels": [
              "Low-Carb"
          ],
          "healthLabels": [
              "Peanut-Free",
              "Tree-Nut-Free"
          ],
          "cautions": [
              "Sulfites"
          ],
          "ingredientLines": [
              "1/2 cup olive oil",
              "5 cloves garlic, peeled",
              "2 large russet potatoes, peeled and cut into chunks",
              "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
              "3/4 cup white wine",
              "3/4 cup chicken stock",
              "3 tablespoons chopped parsley",
              "1 tablespoon dried oregano",
              "Salt and pepper",
              "1 cup frozen peas, thawed"
          ],
          "ingredients": [
              {
                  "text": "1/2 cup olive oil",
                  "weight": 108.0,
                  "image": null
              },
              {
                  "text": "5 cloves garlic, peeled",
                  "weight": 15.0,
                  "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
              },
              {
                  "text": "2 large russet potatoes, peeled and cut into chunks",
                  "weight": 738.0,
                  "image": "https://www.edamam.com/food-img/71b/71b3756ecfd3d1efa075874377038b67.jpg"
              },
              {
                  "text": "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
                  "weight": 1587.5732950000001,
                  "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
              },
              {
                  "text": "3/4 cup white wine",
                  "weight": 176.39999999999998,
                  "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
              },
              {
                  "text": "3/4 cup chicken stock",
                  "weight": 180.0,
                  "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
              },
              {
                  "text": "3 tablespoons chopped parsley",
                  "weight": 11.399999999999999,
                  "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
              },
              {
                  "text": "1 tablespoon dried oregano",
                  "weight": 2.9999999997971143,
                  "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
              },
              {
                  "text": "Salt and pepper",
                  "weight": 17.720239769998784,
                  "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
              },
              {
                  "text": "Salt and pepper",
                  "weight": 8.860119884999392,
                  "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
              },
              {
                  "text": "1 cup frozen peas, thawed",
                  "weight": 134.0,
                  "image": "https://www.edamam.com/food-img/c91/c9130a361d5c5b279bf48c69e2466ec2.jpg"
              }]
      }},


      {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_22992ab625529854ce3bbec07e2c7706",
            "label": "Blackberry + Apple Cocktail",
            "image": "https://www.edamam.com/web-img/ccc/cccff7df44dd1afa256d874c04a0882c.jpg",
            "source": "Lottie + Doof",
            "url": "http://www.lottieanddoof.com/2012/09/lottie-doof-kelly-4/",
            "shareAs": "http://www.edamam.com/recipe/blackberry-apple-cocktail-22992ab625529854ce3bbec07e2c7706/apple",
            "yield": 2.0,
            "dietLabels": [
                "Low-Fat"
            ],
            "healthLabels": [
                "Vegan",
                "Vegetarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Cocktail"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "2 blackberries + 1 for garnish",
                "2 ounces fresh apple cider—preferably fuji apple cider, but regular is great too",
                "1/2 ounce simple syrup",
                "1/2 ounce fresh lemon juice",
                "1 1/2 ounce bourbon",
                "1 tablespoon cinnamon sugar, for the rim"
            ],
            "ingredients": [
                {
                    "text": "2 blackberries + 1 for garnish",
                    "weight": 2.0,
                    "image": "https://www.edamam.com/food-img/b49/b49683595ad4c4565d1bfe05348ef6eb.jpg"
                },
                {
                    "text": "2 ounces fresh apple cider—preferably fuji apple cider, but regular is great too",
                    "weight": 56.69904625,
                    "image": "https://www.edamam.com/food-img/324/32497d8cd6291a6f03acc032e1da7676.jpg"
                },
                {
                    "text": "1/2 ounce simple syrup",
                    "weight": 14.1747615625,
                    "image": "https://www.edamam.com/food-img/198/198cf875b0112c3798592532e502e664.jpg"
                },
                {
                    "text": "1/2 ounce fresh lemon juice",
                    "weight": 14.1747615625,
                    "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
                },
                {
                    "text": "1 1/2 ounce bourbon",
                    "weight": 42.5242846875,
                    "image": "https://www.edamam.com/food-img/0ff/0ffe9f2bc332f9add8b904467a79f818.jpg"
                },
                {
                    "text": "1 tablespoon cinnamon sugar, for the rim",
                    "weight": 12.4999999997887,
                    "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                }
    ]
  }}
    ]);

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
  // console.log(query);

  const addFavouriteRecipe = (item) => {
    const newFavourites = [...favourites, item];
    setFavourites(newFavourites);
  }
  // console.log(favourites);
  
  const deleteFavouriteRecipe = (item) => {
    const newFavourites = favourites.filter(favourite => favourite.recipe.label !== item.recipe.label);
    setFavourites(newFavourites);
  }

  return (

    <div className="App">
      <SearchForm handleOnChange={handleInputOnChange} handleOnSubmit={handleFormSubmit} searchValue={searchValue}/>
      <div className="results d-flex container">
        <div>
          <RecipeListHeading heading='Recipes'/>
          <RecipeList recipes={recipes} favouriteComponent={AddToFavourites} handleFavouriteClick={addFavouriteRecipe} /> 
        </div>
        <div>
          <RecipeListHeading heading='Favourites'/>
          <RecipeList recipes={favourites} favouriteComponent={RemoveFromFavourites} handleFavouriteClick={deleteFavouriteRecipe} />
        </div>
      </div>
    </div>
  );
}

export default App;
