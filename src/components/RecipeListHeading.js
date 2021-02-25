import React from 'react'

const RecipeListHeading = (props) => {
  return (
    <div>
      <h3 className="text-center bg-success text-white m-3">{props.heading}</h3>
    </div>
  )
}

export default RecipeListHeading
