import styled from 'styled-components';

const RecipeListSectionContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const GetRecipesButton = styled.button`
  background-color: #6919BA;
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Pacifico', cursive;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px #BEBEBE;
  &:hover {
    background-color: #5900b3;
  }
  &:active {
    background-color: #5900b3;
    box-shadow: 0 2px #727272;
    transform: translateY(2px);
  }
`;

const RecipesContainer = styled.div`
  width: 450px;
  height: 250px;
  background-color: white;
  border-radius: 5px;
  border: 10px solid #6919BA;
  box-shadow: inset -1px 2px 2px #404040, 6px 9px 1px rgba(0, 0, 0, 0.1);
  overflow: scroll;
`;

module.exports = {
  RecipeListSectionContainer,
  GetRecipesButton,
  RecipesContainer,
};
