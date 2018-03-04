import React, { Component } from 'react';
import RecipeResults from './RecipeResults'
import DietNav from './DietNav'
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="container" color="red">
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Recipe List</h1>
            <p>There's Nothing to Eat!</p>
          </div>
        </div>
        <div className="row" align="center" >
          <DietNav />
        </div>
        <div className="row">
          <RecipeResults />
        </div>
      </div>
    );
  }
}

export default App;
