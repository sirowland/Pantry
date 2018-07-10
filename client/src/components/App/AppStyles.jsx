import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Pacifico', cursive;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

const ModalRecipeContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

module.exports = {
  AppContainer,
  ModalCloseButton,
  ModalContentsContainer,
  ModalRecipeContainer,
};
