import React, { Component } from 'react';
// const urlComponent = "https://lh3.googleusercontent.com/";
import { addToFavorite } from "../actions";
import { connect } from 'react-redux'

class RecipeItems extends Component {
  //create the constructor in order to have the favorites button
  constructor(props){
    super(props);

    this.state = {
      favorited: false
    };
  }
  addToFavorite(){
    this.setState({favorited: !this.state.favorited});
    this.props.addToFavorite(this.props.recipes);
  }

  displayFav(){
    if(!this.state.favorited){
      return <span className="glyphicon glyphicon-unchecked"
      onClick={()=>this.addToFavorite()}
      ></span>
    } else{
      return <span className="glyphicon glyphicon-check"
     onClick={()=>this.setState({favorited: !this.state.favorited})}
      ></span>
    }
  }
  render() {
    console.log(this.props);
    return(

        <div className="col-sm-12 col-sm-3">
          <div className="thumbnail">
            {/*<img src={this.props.recipe.imageUrlsBySize[90]} width="180" height="180" alt="..."/>*/}
            <img src={this.props.recipes.recipe.image} alt="..."/>

            <div className="caption">
              <h3>{this.props.recipes.recipe.label}</h3>
              <p>Health Label-{this.props.recipes.recipe.healthLabels}</p>
              <h4>Lets Cook this! {this.displayFav()}</h4>
            </div>
          </div>
        </div>

    )
  }
}

//all that is needed here is a function so the first parameter will be null as state properties is not needed
export default connect(null, { addToFavorite })(RecipeItems);