import React, { Component } from 'react'

class Form extends Component {
  render(){
    return (
      <form>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text"/>

        <p>Description</p>
        <input type="text"/>

        <p>Instructions</p>
        <input type="text"/>

        <h3>Proportions</h3>
        <div className="container">
          <p>Ingredient Name<br/>
          <input type="text"/>
          </p>

          <p>Quantity<br/>
          <input type="text"/>
          </p>
        </div>

        <p><button> + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form
