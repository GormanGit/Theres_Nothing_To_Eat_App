import React, {Component} from 'react';
import RecipeResults from './RecipeResults'
import "../App.css";
import topNavBar from "./topNavBar";
import FavoriteRecipeList from "../components/FavoriteRecipeList";
import AppList from "./AppList";
import LandingPage from "./LandingPage";
import Footer from "./Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <div className="container">
        <div className="row text-center">
          <div>
            {topNavBar()}
            <div>
            </div>
          </div>
          <div className="row">
            <Router>
              <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/search" exact component={RecipeResults}/>
                <Route path="/fav" exact component={FavoriteRecipeList}/>
                <Route style={{height: "auto"}} path="/AppList" exact component={AppList}/>
              </Switch>
            </Router>
          </div>
          <div className="row" align="center">
          </div>
        </div>
      </div>

      <div>
        {/*{Footer()}*/}
      </div>
      </div>
    );
  }
}

export default App;
