import React from 'react';
import Pantry from '../Pantry/Pantry';
import { AppContainer } from './AppStyles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pantryEntries: [
        {
          name: 'Split Peas',
          amount: 1,
          unit: 'cup',
        },
        {
          name: 'Tagliatelle',
          amount: 8,
          unit: 'oz',
        },
      ],
    };
  }

  render() {
    const {
      pantryEntries,
    } = this.state;

    return (
      <AppContainer>
        <h1>
          Pantry
        </h1>
        <Pantry pantryEntries={pantryEntries} />
      </AppContainer>
    );
  }
}

export default App;
