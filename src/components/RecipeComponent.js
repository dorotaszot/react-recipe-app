import React from 'react'

const RecipeComponent = ({image, title, calories, ingredients}) => {
  return (
    <div>
      <img src={image} alt=""/>
      <h1>{title}</h1>
      <h3>Calories: {calories}</h3>
      <ul>
        <li>Ingredients:</li>
      </ul>
    </div>
  )
}

export default RecipeComponent
