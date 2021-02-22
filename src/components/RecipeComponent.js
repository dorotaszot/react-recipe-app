import React from 'react'

const RecipeComponent = ({image, title, ingredients}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt=""/>
     
      <h3>Ingredients:</h3>
      <ul className="ingredients-list">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeComponent
