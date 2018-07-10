import styled from 'styled-components';

const PantryContainer = styled.div`
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  border: 10px solid #BEBEBE;
  box-shadow: inset -1px 2px 2px #404040, 6px 9px 1px rgba(0, 0, 0, 0.1);
  overflow: scroll;
`;

const NewEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  font-size: 20px;
  letter-spacing: 2px;
  font-family: 'Gochi Hand', cursive;
  color: black;
`;

const PantryInput = styled.input`
  outline: none;
  border: none;
  font-family: 'Gochi Hand', cursive;
  font-size: 20px;
  margin-left: 10px;
  letter-spacing: 2px;
`;

const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 2px solid black;
  color: black;
  text-align: center;
  vertical: center;
  border-radius: 3px;
  cursor: pointer;
`;

module.exports = {
  PantryContainer,
  PantryInput,
  NewEntry,
  CheckBox,
};
