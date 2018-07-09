import React from 'react';
import Pantry from '../Pantry/Pantry';
import Axios from 'axios';
import { AppContainer } from './AppStyles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pantryEntries: [],
    };
    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }

  componentDidMount() {
    const url = window.location.pathname;
    const pantryId = url.split('/')[2];
    this.getPantry(pantryId)
    this.setState({
      pantryId,
    })
  }

  deleteEntry(ingredientId) {
    const { pantryId } = this.state;
    Axios.delete(`/api/pantry/${pantryId}/${ingredientId}`)
      .then(() => this.getPantry(pantryId))
      .catch(err => console.log('ERROR DELETING INGREDIENT:', err));
  }

  editEntry(ingredientId, name) {
    const { pantryId } = this.state;
    Axios.put(`/api/pantry/${pantryId}/${ingredientId}`, {name})
      .then(() => this.getPantry(pantryId))
      .catch(err => console.log('ERROR UPDATING INGREDIENT:', err));
  }

  addEntry(name) {
    const { pantryId } = this.state;
    Axios.post(`/api/pantry/${pantryId}`, {name})
      .then(() => this.getPantry(pantryId))
      .catch(err => console.log('ERROR ADDING ENTRY:', err));
  }

  getPantry(pantryId) {
    Axios.get(`/api/pantry/${pantryId}`)
      .then(result => this.setState({ pantryEntries: result.data }))
      .catch(err => console.log('ERROR GETTING PANTRY:', err));
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
