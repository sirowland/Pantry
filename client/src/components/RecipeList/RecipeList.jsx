import React from 'react';
import PropTypes from 'prop-types';
import Recipe from '../Recipe/Recipe';
import { RecipeListSectionContainer, RecipesContainer, GetRecipesButton } from './RecipeListStyles';

const RecipeList = (props) => {
  const { recipes } = props;

  return (
    <RecipeListSectionContainer>
      <GetRecipesButton>
        Get Recipes!
      </GetRecipesButton>
      <RecipesContainer>
        { recipes.map(recipe => <Recipe name={recipe.name} />) }
      </RecipesContainer>
    </RecipeListSectionContainer>
  );
};

export default RecipeList;

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
