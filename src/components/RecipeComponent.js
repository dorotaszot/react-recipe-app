import React from 'react'

const RecipeComponent = ({image, title, ingredients}) => {
  return (
    <div className="border container mb-3 pt-3 pb-3 d-flex justify-content-center align-items-center flex-column">
      <h3>{title}</h3>
      <img src={image} alt=""/>
     
      <h4>Ingredients:</h4>
      <ul className="ingredients-list">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeComponent
