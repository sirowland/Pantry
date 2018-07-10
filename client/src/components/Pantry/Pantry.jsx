import React from 'react';
import PropTypes from 'prop-types';
import { PantryContainer, PantryInput, NewEntry } from './PantryStyles';
import { CheckBox } from '../Entry/EntryStyles';
import Entry from '../Entry/Entry';

class Pantry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newEntryValue: '',
      alreadyInPantry: null,
    };
  }

  checkEnter(e) {
    const { addEntry } = this.props;
    const { alreadyInPantry } = this.state;

    if (e.keyCode === 13 && alreadyInPantry === false) {
      addEntry(e.target.value);
      this.setState({
        newEntryValue: '',
      });
    }
  }

  updateEntryName(e) {
    const { pantryEntries } = this.props;
    const alreadyInPantry = pantryEntries.filter(entry => entry.name === e.target.value)[0];

    if (e.target.value === '') {
      this.setState({
        alreadyInPantry: null,
        newEntryValue: e.target.value,
      })
    } else if (alreadyInPantry === undefined) {
      this.setState({
        alreadyInPantry: false,
        newEntryValue: e.target.value,
      });
    } else if (alreadyInPantry !== undefined) {
      this.setState({
        alreadyInPantry: true,
        newEntryValue: e.target.value,
      });
    }
  }

  render() {
    const {
      pantryEntries,
      deleteEntry,
      editEntry,
    } = this.props;

    const { newEntryValue, alreadyInPantry } = this.state;
    let validInput;

    if (alreadyInPantry ===  null || !alreadyInPantry) {
      validInput = null;
    } else if (alreadyInPantry) {
      validInput = (<span style={{color:'red'}}>NOPE</span>)
    }

    return (
      <PantryContainer>
        {
          pantryEntries.map(entry => (
            <Entry
              name={entry.name}
              deleteEntry={deleteEntry}
              editEntry={editEntry}
              key={entry.ingredient_id}
              id={entry.ingredient_id}
            />
          ))
        }
        <NewEntry>
          <CheckBox />
          <PantryInput
            type="text"
            onKeyDown={e => this.checkEnter(e)}
            onChange={e => this.updateEntryName(e)}
            value={newEntryValue}
          />
          {validInput}
        </NewEntry>
      </PantryContainer>
    );
  }
}

export default Pantry;

Pantry.propTypes = {
  pantryEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteEntry: PropTypes.func.isRequired,
  editEntry: PropTypes.func.isRequired,
  addEntry: PropTypes.func.isRequired,
};
