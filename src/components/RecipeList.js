import React from 'react'

const RecipeList = (props) => {
  const FavouriteClickComponent = props.handleFavouriteClick;
  return (
    <div className="">
      {props.recipes.map((item) => (
        <div className="border container mb-3 pt-3 pb-3 d-flex justify-content-center align-items-center flex-column single-recipe"> 
    
          <h3 className="mb-3">{item.recipe.label}</h3>
          <div className="image-container m-3">
            <img src={item.recipe.image} alt=""/>
            <div className="overlay"><FavouriteClickComponent /></div>
          </div>
        
          <h4 className="mt-3 mb-3">Ingredients:</h4>
          <ul className="ingredients-list">
            {item.recipe.ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ul>
      
          <a href={item.recipe.shareAs} className="btn btn-outline-secondary" target="blank">Instructions and more</a>
          </div>
      ))} 
    </div>
  )
}

export default RecipeList
