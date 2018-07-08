import React from 'react';
import PropTypes from 'prop-types';
import {
  PantryContainer,
  PantryInput,
} from './PantryStyles';
import {
  EntryContainer,
  CheckBox,
} from '../Entry/EntryStyles';
import Entry from '../Entry/Entry';

const Pantry = (props) => {
  const {
    pantryEntries,
    deleteEntry,
  } = props;

  return (
    <PantryContainer>
      {
        pantryEntries.map(entry => (
          <Entry
            name={entry.name}
            amount={entry.amount}
            unit={entry.unit}
            deleteEntry={deleteEntry}
            key={entry.id}
          />
        ))
      }
      <EntryContainer>
        <CheckBox />
        <PantryInput type="text" />
      </EntryContainer>
    </PantryContainer>
  );
};

export default Pantry;

Pantry.propTypes = {
  pantryEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteEntry: PropTypes.func.isRequired,
};
