import React, { Component } from 'react';


class DietNav extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary">Low-Carb</button>
        <button type="button" className="btn btn-primary">The Zone</button>
        <button type="button" className="btn btn-primary">Ketogentic</button>
        <button type="button" className="btn btn-primary">Vegetarian</button>
        <button type="button" className="btn btn-primary">Vegan</button>
        <button type="button" className="btn btn-primary">Raw</button>
        <button type="button" className="btn btn-primary">Paleo</button>
      </div>
    )
  }
}
export default DietNav;