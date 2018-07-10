import React from 'react';
import {
  RecipeContainer,
  RecipeName,
  RecipePlusButton,
  RecipePlusButtonContainer
} from './RecipeStyles';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RecipeContainer>
        <RecipeName>
          {this.props.name}
        </RecipeName>
      </RecipeContainer>
    );
  }
}

export default Recipe;
