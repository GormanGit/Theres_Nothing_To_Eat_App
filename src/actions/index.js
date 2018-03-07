export const RECIPES = "RECIPES";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV ="REMOVE_FAV";

export function recipes(items) {
  const action = {
    type: RECIPES,
    items
  };
  return action;
}
//adding the favorite to the store
export function addToFavorite(recipes){
  return{
    type: ADD_FAV,
    recipes
  }
}

export function removeFromFavorite(recipes){
  return {
    REMOVE_FAV,
    recipes
  }
}