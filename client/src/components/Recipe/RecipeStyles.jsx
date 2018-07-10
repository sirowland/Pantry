import styled from 'styled-components';

const RecipeContainer = styled.div`
  color: black;
  font-family: 'Gochi Hand', cursive;
  font-size: 25px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 5px;
  &:hover {
    background-color: #BEBEBE
  }
  cursor: pointer;
`;

const RecipeName = styled.div`
  width: 100%;
  text-align: center;
  vertical-align: center;
`;


module.exports = {
  RecipeContainer,
  RecipeName,
};
