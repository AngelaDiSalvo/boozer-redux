import React from 'react'

const CocktailDisplay = ({ cocktail }) => {
  return (
    <div id="cocktail-display">
      <h1>{cocktail.name}</h1>
      <h3>{cocktail.description}</h3>
      <p>{cocktail.instructions}</p>
      <ul>
        {cocktail.ingredients.map( ingredient => (
          <li>{ingredient.amount} {ingredient.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CocktailDisplay
