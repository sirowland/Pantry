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
          id: 1,
        },
        {
          name: 'Tagliatelle',
          amount: 8,
          unit: 'oz',
          id: 2,
        },
      ],
    };
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  deleteEntry(name) {
    let pantryEntries = this.state.pantryEntries;
    pantryEntries = pantryEntries.filter(entry => entry.name !== name);
    this.setState({
      pantryEntries,
    });
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
        <Pantry pantryEntries={pantryEntries} deleteEntry={this.deleteEntry} />
      </AppContainer>
    );
  }
}

export default App;
