import React from 'react';
import axios from 'axios';
import Pantry from '../Pantry/Pantry';
import { AppContainer } from './AppStyles';
import RecipeList from '../RecipeList/RecipeList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pantryEntries: [],
      recipes: [
        {
          name: 'Chicken Parmesan',
          percentageMatch: 0.10,
          ingredients: [
          {
            name: 'Chicken Breast',
            amount: 1,
            unit: 'pound',
          },
          {
            name: 'Parmesan',
            amount: .25,
            unit: 'cup',
          },
          {
            name: 'Marinara',
            amount: 2,
            unit: 'cup',
          },
          {
            name: 'Spaghetti',
            amount: 8,
            unit: 'ounce',
          },
        ],
          instructions: 'DO THE THING!',
        },
        {
          name: 'Spaghetti Carbonara',
          percentageMatch: 0.10,
          ingredients: [
          {
            name: 'Guanciale',
            amount: 1,
            unit: 'pound',
          },
          {
            name: 'Parmesan',
            amount: .25,
            unit: 'cup',
          },
          {
            name: 'Egg',
            amount: 2,
            unit: null,
          },
          {
            name: 'Spaghetti',
            amount: 8,
            unit: 'ounce',
          },
        ],
          instructions: 'DO THE THING!',
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
    this.getPantry(pantryId);
    this.setState({ pantryId });
  }

  getPantry(pantryId) {
    axios.get(`/api/pantry/${pantryId}`)
      .then(result => this.setState({ pantryEntries: result.data }))
      .catch(err => console.log('ERROR GETTING PANTRY:', err));
  }

  addEntry(name) {
    const { pantryId } = this.state;
    axios.post(`/api/pantry/${pantryId}`, { name })
      .then(() => this.getPantry(pantryId))
      .catch(err => console.log('ERROR ADDING ENTRY:', err));
  }

  editEntry(ingredientId, name) {
    const { pantryId } = this.state;
    axios.put(`/api/pantry/${pantryId}/${ingredientId}`, { name })
      .then(() => this.getPantry(pantryId))
      .catch(err => console.log('ERROR UPDATING INGREDIENT:', err));
  }

  deleteEntry(ingredientId) {
    const { pantryId } = this.state;
    axios.delete(`/api/pantry/${pantryId}/${ingredientId}`)
      .then(() => this.getPantry(pantryId))
      .catch(err => console.log('ERROR DELETING INGREDIENT:', err));
  }


  render() {
    const {
      pantryEntries,
      recipes,
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
        <RecipeList recipes={recipes} />
      </AppContainer>
    );
  }
}

export default App;
