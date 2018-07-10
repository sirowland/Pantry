import React from 'react';
import { RecipeContainer } from './RecipeStyles';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RecipeContainer>
        {this.props.name}
      </RecipeContainer>
    );
  }
}

export default Recipe;
