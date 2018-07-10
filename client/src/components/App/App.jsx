import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Pantry from '../Pantry/Pantry';
import { AppContainer, ModalCloseButton, ModalContentsContainer, ModalRecipeContainer } from './AppStyles';
import RecipeList from '../RecipeList/RecipeList';

Modal.setAppElement('#app');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pantryEntries: [],
      recipes: [],
      modalIsOpen: false,
      modalRecipeName: '',
      modalRecipeIngredients: [],
      modalRecipeInstructions: '',
    };
    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {
    const url = window.location.pathname;
    const pantryId = url.split('/')[2];
    this.getPantry(pantryId);
    this.setState({ pantryId });
  }

  getPantry(pantryId) {
    axios.get(`/api/pantry/${pantryId}`)
      .then(result => this.setState({ pantryEntries: result.data }))
      .catch(err => console.log('ERROR GETTING PANTRY:', err));
  }

  getRecipes() {
    const { pantryId } = this.state;
    return axios.get(`/api/pantry/${pantryId}/recipes`)
      .then(result => this.setState({ recipes: result.data }))
      .catch(err => console.log('ERROR GETTING RECIPES', err));
  }

  addEntry(name) {
    const { pantryId } = this.state;
    axios.post(`/api/pantry/${pantryId}`, { name })
      .then(() => this.getPantry(pantryId))
      .catch(err => console.log('ERROR ADDING ENTRY:', err));
  }

  editEntry(ingredientId, name) {
    const { pantryId } = this.state;
    axios.put(`/api/pantry/${pantryId}/${ingredientId}`, { name })
      .then(() => this.getPantry(pantryId))
      .catch(err => console.log('ERROR UPDATING INGREDIENT:', err));
  }

  deleteEntry(ingredientId) {
    const { pantryId } = this.state;
    axios.delete(`/api/pantry/${pantryId}/${ingredientId}`)
      .then(() => this.getPantry(pantryId))
      .catch(err => console.log('ERROR DELETING INGREDIENT:', err));
  }

  async handleOpenModal(recipeId) {
    try {
      await this.populateModal(recipeId);
      this.setState({ modalIsOpen: true });
    } catch (err) {
      console.log(err);
    }
  }

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
  }

  populateModal(recipeId) {
    const { recipes } = this.state;
    const modalRecipe = recipes.filter(recipe => recipe.recipeId === recipeId)[0];

    return this.setState({
      modalRecipeName: modalRecipe.name,
      modalRecipeIngredients: modalRecipe.ingredients,
      modalRecipeInstructions: modalRecipe.instructions,
    });
  }


  render() {
    const {
      pantryEntries,
      recipes,
      modalIsOpen,
      modalRecipeName,
      modalRecipeIngredients,
      modalRecipeInstructions,
    } = this.state;

    return (
      <AppContainer>
        <h1>
          Pantry
        </h1>
        <Modal
          isOpen={modalIsOpen}
          contentLabel="Minimal Modal Example"
          className="Modal"
        >
          <ModalContentsContainer>
            <ModalRecipeContainer>
              <div>{modalRecipeName}</div>
              Ingredients:
              <ul>
                {modalRecipeIngredients.map((ingredient) => {
                  console.log(ingredient);
                  if (ingredient.amount > 1) {
                    if (ingredient.unit === null) {
                      return (<li>{ingredient.amount} {ingredient.name}s</li>)
                    }
                    return (<li>{ingredient.amount} {ingredient.unit}s {ingredient.name}</li>);
                  }

                  if (ingredient.unit === null) {
                    return (<li>{ingredient.amount} {ingredient.name}</li>);
                  }
                  return (<li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>);
                })}
              </ul>
              <div>Instructions: {modalRecipeInstructions}</div>
            </ModalRecipeContainer>
            <ModalCloseButton onClick={() => this.handleCloseModal()}>
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS45OTIgNDU1Ljk5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1Ljk5MiA0NTUuOTkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggZD0iTTIyNy45OTYsMEMxMDIuMDgxLDAsMCwxMDIuMDgxLDAsMjI3Ljk5NmMwLDEyNS45NDUsMTAyLjA4MSwyMjcuOTk2LDIyNy45OTYsMjI3Ljk5NiAgICAgIGMxMjUuOTQ1LDAsMjI3Ljk5Ni0xMDIuMDUxLDIyNy45OTYtMjI3Ljk5NkM0NTUuOTkyLDEwMi4wODEsMzUzLjk0MSwwLDIyNy45OTYsMHogTTIyNy45OTYsNDI1LjU5MyAgICAgIGMtMTA4Ljk1MiwwLTE5Ny41OTctODguNjQ1LTE5Ny41OTctMTk3LjU5N1MxMTkuMDQ0LDMwLjM5OSwyMjcuOTk2LDMwLjM5OXMxOTcuNTk3LDg4LjY0NSwxOTcuNTk3LDE5Ny41OTcgICAgICBTMzM2Ljk0OCw0MjUuNTkzLDIyNy45OTYsNDI1LjU5M3oiIGZpbGw9IiMwMDAwMDAiLz4KCQkJCTxwYXRoIGQ9Ik0zMTIuMTQyLDEyMi4zNThsLTgzLjUzOCw4My41NjhsLTc0Ljk2NS04My41NjhjLTUuOTI4LTUuOTI4LTE1LjU2NS01LjkyOC0yMS40OTIsMCAgICAgIGMtNS45MjgsNS45MjgtNS45MjgsMTUuNTY1LDAsMjEuNDkybDc0Ljk2NSw4My41NjhsLTg0LjcyMyw4NC43MjNjLTUuOTI4LDUuOTI4LTUuOTI4LDE1LjU5NSwwLDIxLjQ5MiAgICAgIGM1LjkyOCw1LjkyOCwxNS41NjUsNS45MjgsMjEuNDkyLDBsODMuNTY4LTgzLjUzOGw3NC45NjUsODMuNTM4YzUuODk3LDUuOTI4LDE1LjU2NSw1LjkyOCwyMS40NjIsMCAgICAgIGM1LjkyOC01Ljg5OCw1LjkyOC0xNS41NjUsMC0yMS40OTJsLTc0Ljk5NS04My41MzhsODQuNzIzLTg0Ljc1NGM1LjkyOC01LjkyOCw1LjkyOC0xNS41NjUsMC0yMS40OTIgICAgICBDMzI3LjY3NiwxMTYuNDMsMzE4LjA3LDExNi40MywzMTIuMTQyLDEyMi4zNTh6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
            </ModalCloseButton>
          </ModalContentsContainer>
        </Modal>
        <Pantry
          pantryEntries={pantryEntries}
          deleteEntry={this.deleteEntry}
          editEntry={this.editEntry}
          addEntry={this.addEntry}
          value=""
        />
        <RecipeList
          recipes={recipes}
          getRecipes={this.getRecipes}
          openModal={this.handleOpenModal}
        />
      </AppContainer>
    );
  }
}

export default App;
