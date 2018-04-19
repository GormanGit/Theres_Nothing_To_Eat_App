// import React, { Component } from 'react';
//this is the only original thing
// import { API_KEY } from '../secrets';
// import { APP_ID } from '../secrets';
// import { recipes } from '../actions';
// import { connect } from 'react-redux';

//
// class DietNav extends Component {
//   constructor(props){
//     super(props)
//     this.state= {
//       query: ''
//     };
//   }
//   diet(){
//     console.log('diet button', this.state.query);
    //yumlly
    // let url = `http://api.yummly.com/v1/api/recipes?&_app_id=${APP_ID}&_app_key=${API_KEY}&q=${this.state.query}&maxResult=20&start=20`;
    //edemam
    // let url = `https://api.edamam.com/search?_app_id=${APP_ID}&_app_key=${API_KEY}&q=${this.state.query}`
    // // console.log(url)
    // fetch(url, {
    //   method: 'GET'
    // }).then(response => response.json())
    // //changing appending the .matches here will get into the part of the object that is needed. otherwise just say results
    // //for yummlly this was results.matches
    // .then(results => {this.props.recipes(results.hits)});

  // }

//   render() {
//     return (
//       <div>
//         {/*<button type="button" className="btn btn-primary"*/}
//         {/*onClick={this.setState({query: "Low-carb"})}>Low-Carb</button>*/}
//         {/*<button type="button" className="btn btn-primary">The Zone</button>*/}
//         {/*<button type="button" className="btn btn-primary">Ketogentic</button>*/}
//         {/*<button type="button" className="btn btn-primary">Vegetarian</button>*/}
//         {/*<button type="button" className="btn btn-primary">Vegan</button>*/}
//         {/*<button type="button" className="btn btn-primary">Raw</button>*/}
//         {/*<button type="button" className="btn btn-primary">Paleo</button>*/}
//       </div>
//     )
//   }
// }
// export default DietNav;