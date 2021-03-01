import React from 'react'

const RecipeListHeading = (props) => {
  return (
    <div>
      <h3 className="text-center text-success text-white recipe-heading">{props.heading}</h3>
    </div>
  )
}

export default RecipeListHeading
