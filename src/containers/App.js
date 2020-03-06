import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
// import { robots } from './robots.js'; //Using destructuring because robots.js doesn't have export 'default'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super() // Super calls the constructor of the component class. 
    this.state = { // State is what describes our App. It can change and affect the app. State lives in the parent component.
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users})});// takes the empty array from this.state into a list of users fetchec from the website above
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props; // Coming from the Redux store (see index.js file)
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase()) //If anything in the string includes anything in the string, you return an array with available robots
    })
    return !robots.length ?  //robots.length === 0 evaluates to 'false'. So, we are saying, if NOT false, return the nested code 
      //This is a loading bar component
      <h1>Loading</h1> : 
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);