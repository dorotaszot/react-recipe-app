import React from 'react'

const RecipeList = (props) => {
  const FavouriteClickComponent = props.favouriteComponent;
  return (
    <div className="single-result">
      {props.recipes.map((item) => (
        <div className="border mt-3 pt-3 pb-3 d-flex justify-content-center align-items-center flex-column single-recipe"> 
    
          <h3 className="mb-3 text-center">{item.recipe.label}</h3>
          <div className="image-container m-3">
            <img src={item.recipe.image} alt="" className="img-fluid"/>
            <div className="overlay" onClick={() => props.handleFavouriteClick(item)}><FavouriteClickComponent /></div>
          </div>
        
          <h4 className="mt-3 mb-3">Ingredients:</h4>
          <ul className="ingredients-list">
            {item.recipe.ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ul>
      
          <a href={item.recipe.shareAs} className="btn btn-outline-secondary instructions-btn" target="blank">Instructions and more</a>
          </div>
      ))} 
    </div>
  )
}

export default RecipeList
