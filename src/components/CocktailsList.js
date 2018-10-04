import React, { Component } from 'react'
import Cocktail from './Cocktail'

function CocktailsList(props){
  return (
    <div id="cocktail-list">
      {props.cocktails.map(cocktail => (
        <Cocktail key={cocktail.id} cocktail={cocktail} onClick={e => props.onSelectCocktail(cocktail)} />
      ))}
    </div>
  )
}



export default CocktailsList

