import React from 'react';
import Pantry from '../Pantry/Pantry';
import Axios from 'axios';
import { AppContainer } from './AppStyles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pantryid: 1,
      pantryEntries: [
        {
          name: 'Split Peas',
          ingredient_id: 1,
        },
        {
          name: 'Tagliatelle',
          ingredient_id: 2,
        },
      ],
    };
    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }

  componentDidMount() {
    const url = window.location.pathname;
    const pantryId = url.split('/')[2];
    this.getPantry(pantryId)
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
      ingredient_id: 3,
      name,
    });

    this.setState({
      pantryEntries,
    });
  }

  getPantry(pantryId) {
    Axios.get(`/api/pantry/${pantryId}`)
      .then(result => {
        this.setState({
          pantryEntries: result.data,
        })
      })
      .catch(err => console.log('ERROR GETTING PANTRY:', err));
  }

  // addIngredient(pantryId, name) {
  //   Axios.post('/api/ingredients', this.pantryEntries)
  // }

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
