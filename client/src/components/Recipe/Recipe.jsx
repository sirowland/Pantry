import React from 'react';
import PropTypes from 'prop-types';
import {
  RecipeContainer,
  RecipeName,
  RecipePlusButton,
  RecipePlusButtonContainer
} from './RecipeStyles';

const Recipe = (props) => {
  const { name, openModal, id, possessionCountStr, possessionCountPercentage } = props;

  return (
    <RecipeContainer onClick={() => openModal(id)}>
      <RecipeName>
        {name}
      </RecipeName>
      <div>{possessionCountStr}</div>
    </RecipeContainer>
  );
};

export default Recipe;

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  possessionCountStr: PropTypes.string.isRequired,
  possessionCountPercentage: PropTypes.number.isRequired,
};
