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
  text-align: left;
  font-family: 'Gochi Hand', cursive;
  font-size: 20px;
`;

const ModalRecipeContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 50%;
  text-align: center;
`;

const ModalRecipeName = styled.div`
  font-family: 'Gochi Hand', cursive;
  font-size: 40px;
  letter-spacing: 3px;
`;

const ModalRecipeIngredients = styled.ul`
  font-family: 'Gochi Hand', cursive;
  font-size: 25px;
  letter-spacing: 3px;
  text-align: left;
`;

const ModalRecipeInstructions = styled.p`
  font-family: 'Gochi Hand', cursive;
  font-size: 15px;
  letter-spacing: 1px;
`;

module.exports = {
  AppContainer,
  ModalCloseButton,
  ModalContentsContainer,
  ModalRecipeContainer,
  ModalRecipeName,
  ModalRecipeIngredients,
  ModalRecipeInstructions,
};
