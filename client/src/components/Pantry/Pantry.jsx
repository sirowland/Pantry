import React from 'react';
import PropTypes from 'prop-types';
import {
  PantryContainer,
  PantryInput,
  EntryContainer,
  CheckBox,
  EntryName,
  EntryAmount,
} from './PantryStyles';

const Pantry = (props) => {
  const {
    pantryEntries,
  } = props;

  //TODO props checked
  const checkBox = props.checked ? (<CheckBox><div>X</div></CheckBox>) : (<CheckBox />);

  return (
    <PantryContainer>
      {
        pantryEntries.map(entry => (
          <EntryContainer>
            {checkBox}
            <EntryName>
              {entry.name}
            </EntryName>
            <EntryAmount>
              {`${entry.amount} ${entry.unit}`}
            </EntryAmount>
          </EntryContainer>
        ))
      }
      <EntryContainer>
        {checkBox}
        <PantryInput type="text" />
      </EntryContainer>
    </PantryContainer>
  );
};

export default Pantry;

Pantry.propTypes = {
  pantryEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
