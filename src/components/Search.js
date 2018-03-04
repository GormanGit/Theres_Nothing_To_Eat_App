import React, { Component } from 'react';
import  { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { API_KEY } from '../secrets';
import { APP_ID } from '../secrets'
//add the action to the search
import { recipes } from '../actions';
import { connect } from 'react-redux';




class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: ''
    };
  }

  search() {
    console.log('search button clicked', this.state.query);
    //yumlly
    // let url = `http://api.yummly.com/v1/api/recipes?&_app_id=${APP_ID}&_app_key=${API_KEY}&q=${this.state.query}&maxResult=20&start=20`;
    //edemam
    let url = `https://api.edamam.com/search?_app_id=${APP_ID}&_app_key=${API_KEY}&q=${this.state.query}`
    // console.log(url)
    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
    //changing appending the .matches here will get into the part of the object that is needed. otherwise just say results
    //for yummlly this was results.matches
    .then(results => {this.props.recipes(results.hits)});
  }
  render(){
    return (<div>
      <Form inline className="col-md-6 col-md-offset-4">
        <FormGroup>
          <ControlLabel>Search</ControlLabel>
          <FormControl
          type="text"
          placeholder="Lets start cooking"
            //in react if we need any data we can use onChange
            //event means onChange event, target is the field "FormControl", and value of that field. must pass in
            //the event with {(event)...So now console.log(this.state.query) and it will return the input value! :) see line 15
          onChange={(event)=>this.setState({query: event.target.value})}
          />
          {' '}
          <Button bsStyle="success"
          onClick={()=> this.search()}>Submit</Button>
        </FormGroup>
      </Form>
    </div>)
  }
}

export default connect(null, { recipes })(Search);