import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'
import { connect } from 'react-redux'
import Cocktail from './Cocktail';

class CocktailsContainer extends Component {

  componentDidMount(){
    this.props.fetchCocktails();
  }

  render(){
    return (
      <div className="container">
        <CocktailsList cocktails={this.props.cocktails} onSelectCocktail={this.props.selectCocktail} />
        { this.props.selectedCocktail ?
          <CocktailDisplay cocktail = {this.props.selectedCocktail} />
        : <h3>Please Select a Cocktail</h3> }
        <Form />  
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    selectedCocktail: state.selectedCocktail,
    cocktails: state.cocktails
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    fetchCocktails: () => dispatch({ type: 'FETCH_COCKTAILS'} ),
    selectCocktail: cocktail => dispatch({ type:'SELECT_COCKTAIL', payload:cocktail})
  }
}

const generateReduxCocktailsContainer = connect(mapStateToProps, mapDispatchToProps)

const ReduxCocktailsContainer = generateReduxCocktailsContainer(CocktailsContainer)

export default ReduxCocktailsContainer
