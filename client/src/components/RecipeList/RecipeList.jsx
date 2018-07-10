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

  openRecipes() {
    this.setState({ recipesOpen: true });
  }

  render() {
    const { recipes } = this.props;
    const { recipesOpen } = this.state;

    const recipesContainer = recipesOpen
      ? (
        <RecipesContainer>
          { recipes.map(recipe => <Recipe name={recipe.name} />) }
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
};
