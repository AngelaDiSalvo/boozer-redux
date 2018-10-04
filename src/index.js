import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

const COCKTAIL_URL = 'https://react-boozer-backend.herokuapp.com/api/v1/cocktails'
const PROPORTIONS_URL = 'https://react-boozer-backend.herokuapp.com/api/v1/proportions'
const INGREDIENTS_URL = 'https://react-boozer-backend.herokuapp.com/api/v1/ingredients'

const reducer = function(currentState, action = {}){
    let { type, payload } = action
    let newState = { ...currentState }
    switch(type){
        case 'FETCH_COCKTAILS':
            Promise.all([
                fetch(COCKTAIL_URL).then( response => response.json() ),
                fetch(PROPORTIONS_URL).then( response => response.json() ),
                fetch(INGREDIENTS_URL).then( response => response.json() )
            ])
                .then( ([ cocktails, proportions, ingredients ]) =>  {
                    store.dispatch({ 
                        type: 'RECIEVE_COCKTAILS', 
                        payload: { cocktails, proportions, ingredients}
                    })
                })
        break
        case 'RECIEVE_COCKTAILS':
             let { cocktails, proportions, ingredients } = payload
             newState.cocktails =  cocktails.map( cocktail => {
                let cocktailProportions = proportions.filter( proportion => proportion.cocktail_id == cocktail.id)
                let proportionsWithIngredients = cocktailProportions.map( proportion => {
                    let ingredient = ingredients.find( ingredient => proportion.ingredient_id == ingredient.id)
                    return { ...ingredient, amount: proportion.amount}
                })
                return { ...cocktail, ingredients: proportionsWithIngredients}
            })
        break;
        case 'SELECT_COCKTAIL':
            newState.selectedCocktail = payload
        break;
        case 'UPDATE_COCKTAIL_FORM':
            newState.cocktailFormValues = { ...newState.cocktailFormValues, [payload.name]: payload.value }
        break
        case 'UPDATE_INGREDIENT_FORM':
            var ingredients = [ ...newState.cocktailFormValues.ingredients ]
            ingredients[payload.index][payload.name] = payload.value
            newState.cocktailFormValues = { ...newState.cocktailFormValues, ingredients }
        break
        case 'ADD_INGREDIENT_FIELD':
            var ingredients = [ ...newState.cocktailFormValues.ingredients ]
            ingredients.push({
                name: '',
                amount: ''
            })
            newState.cocktailFormValues = { ...newState.cocktailFormValues, ingredients }
        break
        case 'ADD_COCKTAIL':
            newState.cocktails = [ ...newState.cocktails, newState.cocktailFormValues]
        break
    }
    return newState
}


const store = createStore(
    reducer, 
    {
        cocktails: [],
        selectedCocktail: null,
        cocktailFormValues: {
            name: '',
            description: '',
            ingredients:[]
        }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
