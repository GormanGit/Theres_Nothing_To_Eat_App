import recipes from './recipe_reducer';
import { combineReducers } from 'redux';
import  favorites  from './fav_reducer'



const rootReducer =  combineReducers({
  recipes,
  favorites
});

export default rootReducer;