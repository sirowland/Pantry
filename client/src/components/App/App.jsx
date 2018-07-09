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
          id: 1,
        },
        {
          name: 'Tagliatelle',
          id: 2,
        },
      ],
    };
    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }

  deleteEntry(id) {
    let pantryEntries = this.state.pantryEntries;
    pantryEntries = pantryEntries.filter(entry => entry.id !== id);
    this.setState({
      pantryEntries,
    });
  }

  editEntry(id, name) {
    let pantryEntries = this.state.pantryEntries;

    for (let i = 0; i < pantryEntries.length; i += 1) {
      if (pantryEntries[i].id === id) {
        pantryEntries[i].name = name;
      }
    }

    this.setState({
      pantryEntries,
    });
  }

  addEntry(name) {
    const { pantryEntries } = this.state;
    pantryEntries.push({
      id: 3,
      name,
    });

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
        <Pantry
          pantryEntries={pantryEntries}
          deleteEntry={this.deleteEntry}
          editEntry={this.editEntry}
          addEntry={this.addEntry}
          value=""
        />
      </AppContainer>
    );
  }
}

export default App;
