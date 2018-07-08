import styled from 'styled-components';

const EntryContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  font-size: 20px;
  letter-spacing: 2px;
  font-family: 'Gochi Hand', cursive;
  color: black;
  justify-content: space-between;
`;

const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid black;
  color: black;
  text-align: center;
  vertical-align: center;
  border-radius: 3px;
  cursor: pointer;
`;

const EntryAmount = styled.div`
  margin-left: 30px;
  margin-right: 10px;
`;

const EntryName = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const ToolsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Edit = styled.img`
  cursor: pointer;
`;

const Trash = styled.img`
  cursor: pointer;
`;

module.exports = {
  EntryContainer,
  CheckBox,
  EntryAmount,
  EntryName,
  ToolsContainer,
  InfoContainer,
  Edit,
  Trash,
};