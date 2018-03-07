import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems'


class FavoriteRecipeList extends Component{
  render() {
    console.log(this.props.favorites)
    return (
      //map over the favorites and render the RecipeItems that are returned in a seperate div
      <div>
      <h4>My Favorite Recipes</h4>
    {this.props.favorites.map(recipes =>{
      return <RecipeItems recipes={recipes} key={recipes.recipe.image}/>
    })}
     </div>
    )
  }
}
//wire to the store
function mapStateToProps(state){
  return{
    //once we have favorites here we can access it in the render above
    favorites: state.favorites

  }
}




export default connect(mapStateToProps, null)(FavoriteRecipeList);