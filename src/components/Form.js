import React, { Component } from 'react'
import { connect } from 'react-redux'

function Form(props){
  console.log(props)
  return (
    <form>
      <h3>Create a Cocktail</h3>

      <p>Name</p>
      <input onChange={e => props.updateForm('name', e.target.value)} type="text"/>

      <p>Description</p>
      <input onChange={e => props.updateForm('description', e.target.value)} type="text"/>

      <p>Instructions</p>
      <input onChange={e => props.updateForm('instructions', e.target.value)} type="text"/>

      <h3>Proportions</h3>
      <div >
        {props.form.ingredients.map( (ingredient, index ) => (
          <div>
           <p>Ingredient Name<br/>
           <input onChange={e => props.updateFormIngredient(index, 'name', e.target.value)} type="text"/>
           </p>
   
           <p>Quantity<br/>
           <input onChange={e => props.updateFormIngredient(index, 'amount', e.target.value)} type="text"/>
           </p>
          </div>
        ))}
      </div>

      <p><button onClick={props.addIngredientField}> + </button></p>

      <input onClick={props.addCocktail} type="submit"/>
    </form>
  )
}


const mapStateToProps = function(state){
  return {
    form: state.cocktailFormValues
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    
    updateForm: (name, value) => dispatch({ type: 'UPDATE_COCKTAIL_FORM', payload: { name, value } } ),
    updateFormIngredient: (index, name, value) => dispatch({ type: 'UPDATE_INGREDIENT_FORM', payload: { index, name, value} }),
    addIngredientField: e => {
      e.preventDefault()
      dispatch( { type:'ADD_INGREDIENT_FIELD' })
    },
    addCocktail: e => {
      e.preventDefault()
      dispatch({ type:'ADD_COCKTAIL' })
    },
  }
}

const generateReduxForm = connect(mapStateToProps, mapDispatchToProps)

const ReduxForm = generateReduxForm(Form)

export default ReduxForm
