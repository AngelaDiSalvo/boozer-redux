import React from 'react'

const Cocktail = (props) => {
  return (
    <li onClick={props.onClick}>{props.cocktail.name}</li>
  )
}

export default Cocktail
