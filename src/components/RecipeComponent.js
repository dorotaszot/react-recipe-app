import React from 'react'

const RecipeComponent = ({image, title, ingredients, instructions}) => {
  return (
    <div className="border container mb-3 pt-3 pb-3 d-flex justify-content-center align-items-center flex-column">
      <h3 className="mb-3">{title}</h3>
      <img src={image} alt=""/>
     
      <h4 className="mt-3 mb-3">Ingredients:</h4>
      <ul className="ingredients-list">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
   
        <a href={instructions} className="btn btn-outline-secondary" target="blank">Instructions and more</a>
  
    </div>
  )
}

export default RecipeComponent
