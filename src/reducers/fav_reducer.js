import { ADD_FAV } from "../actions";


function addToFavorite(state = [], action) {
  switch (action.type) {
    case ADD_FAV:
      console.log("Recipe added to favorite", action.recipes);
      //added movie to the state array
      let favoriteRecipe = [...state, action.recipes]
      return favoriteRecipe;
    default:
      return state;
  }
}
export default addToFavorite;