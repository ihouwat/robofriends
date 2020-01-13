import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
// import { robots } from './robots.js'; //Using destructuring because robots.js doesn't have export 'default'
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super() // Super calls the constructor of the component class. 
    this.state = { // State is what describes our App. It can change and affect the app. State lives in the parent component.
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users})});// takes the empty array from this.state into a list of users fetchec from the website above
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value}) // setState is a method that comes with React. This one resets the state of the searchfield
  }

  render() {
    const { robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()) //If anything in the string includes anything in the string, you return an array with available robots
    })
    return !robots.length ?  //robots.length === 0 evaluates to 'false'. So, we are saying, if NOT false, return the nested code 
      //This is a loading bar component
      <h1>Loading</h1> : 
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
  }
}

export default App;