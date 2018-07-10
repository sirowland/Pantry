import React from 'react';
import PropTypes from 'prop-types';
import Recipe from '../Recipe/Recipe';
import { RecipeListSectionContainer, RecipesContainer, GetRecipesButton } from './RecipeListStyles';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipesOpen: false,
    };
  }

  async openRecipes() {
    const { getRecipes } = this.props;
    try {
      await getRecipes();
      this.setState({ recipesOpen: true });
    } catch (err) {
      console.log('ERROR GETTING RECIPES inside RecipeList', err);
    }
  }

  render() {
    const { recipes, openModal } = this.props;
    const { recipesOpen } = this.state;

    const recipesContainer = recipesOpen
      ? (
        <RecipesContainer>
          { recipes.map(recipe => (
            <Recipe
              name={recipe.name}
              openModal={openModal}
              key={recipe.recipeId}
              possessionCountStr={recipe.ingredientPossessionCount + '/' + recipe.ingredients.length}
              possessionCountPercentage={Math.floor(100 * (recipe.ingredientPossessionCount / recipe.ingredients.length))}
              id={recipe.recipeId}
            />
          ))}
        </RecipesContainer>
      )
      : null;

    return (
      <RecipeListSectionContainer>
        <GetRecipesButton onClick={() => this.openRecipes()}>
          Get Recipes!
        </GetRecipesButton>
        {recipesContainer}
      </RecipeListSectionContainer>
    );
  }
};

export default RecipeList;

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
  getRecipes: PropTypes.func.isRequired,
};
