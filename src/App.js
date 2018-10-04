import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <CocktailsContainer />
    );
  }

}

function mapStateToProps(state){
  return {
    
  }
}

function mapDispatchToProps(dispatch){
  return {
    
  }
}

const generateReduxApp = connect(App.mapStateToProps, App.mapDispatchToProps)

const ReduxApp = generateReduxApp(App)

export default ReduxApp;
