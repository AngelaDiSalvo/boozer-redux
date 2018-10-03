# Boozer React Practice Code Challenge

## API Routes

RESTful routes have been set up for you at the following links:

Cocktails:
https://react-boozer-backend.herokuapp.com/api/v1/cocktails

Ingredients:
https://react-boozer-backend.herokuapp.com/api/v1/ingredients

Proportions:
https://react-boozer-backend.herokuapp.com/api/v1/proportions

*Clarification on the Domain: An Ingredient is a record that indicates, for example, "Mint Leaves" or "Bitters" is something that many cocktails may have. A Proportion is a join table where each record indicates, a specific cocktail, is made with a specific ingredient, with a certain amount. For example, a Mojito is made with 4-5 mint leaves.*

## Part One - Render and Click on Cocktails

In CocktailsContainer, you should fetch a list of cocktails from the API and render out the cocktail names.

Next, each cocktail name should be a clickable link. Clicking on this link should render out a detail view of the cocktail including the name, description, instructions, and proportions.

*BONUS - use react-router-dom to update the URL as you click on each particular cocktail. Our goal is to have a "Master-Detail" layout - our list should be ever-present on the left side and our detail view should take up two thirds of the screen.*

## Part Two - Dynamic Form

As a user, I should be able to create a new cocktail. This means we will need a form where I can enter a cocktail name, description, instructions, and multiple proportions.

The form should be dynamic - I should be able to choose how many different proportions I want to add. This is a pretty tough task. Think through what adding multiple fields to your form means for the state of your React Component that renders the form. You will need to dynamically update the amount of ingredient fields.

Here is an example of what an MVP might look like, there is plenty of room to expand this project and go beyond what is shown here:

![Boozer example](./Boozer.gif)
