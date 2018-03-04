import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems'
import FavoriteRecipeList from './FavoriteRecipeList'

class RecipeResults extends Component {
  render() {
    return (
      <div>
      <FavoriteRecipeList />
        <hr />
        <Search />
        {this.props.recipes.map(item => {
          return <RecipeItems recipes={item} key={item.recipe.label} />
        })}
      </div>
    )
  }
}

//access the data in the RECIPE
function mapStateToProps(state){
console.log(state);
  return{
recipes: state.recipes
  }

}
export default connect(mapStateToProps, null)(RecipeResults);