import React from 'react';
import PropTypes from 'prop-types';
import {
  PantryContainer,
  PantryInput,
  NewEntry,
} from './PantryStyles';
import {
  EntryContainer,
  CheckBox,
} from '../Entry/EntryStyles';
import Entry from '../Entry/Entry';

class Pantry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newEntryValue: '',
    };
  }

  checkEnter(e) {
    const { addEntry } = this.props;
    const { newEntryValue } = this.state;
    if (e.keyCode === 13) {
      addEntry(newEntryValue);
      this.setState({
        newEntryValue: '',
      });
    }
  }

  updateEntryName(e) {
    this.setState({
      newEntryValue: e.target.value,
    });
  }

  render() {
    const {
      pantryEntries,
      deleteEntry,
      editEntry,
    } = this.props;

    const { newEntryValue } = this.state;

    return (
      <PantryContainer>
        {
          pantryEntries.map(entry => (
            <Entry
              name={entry.name}
              deleteEntry={deleteEntry}
              editEntry={editEntry}
              key={entry.id}
              id={entry.id}
            />
          ))
        }
        <NewEntry>
          <CheckBox />
          <PantryInput
            type="text"
            onChange={e => this.updateEntryName(e)}
            onKeyDown={e => this.checkEnter(e)}
            value={newEntryValue}
          />
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
