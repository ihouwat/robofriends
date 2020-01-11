import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { robots } from './robots.js'; //Using destructuring because robots.js doesn't have export 'default'
import './App.css';

class App extends Component {
  constructor() {
    super() // Super calls the constructor of the component class. 
    this.state = { // State is what describes our App. It can change and affect the app. State lives in the parent component.
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value}) // setState is a method that comes with React. This one resets the state of the searchfield
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //If anything in the string includes anything in the string, you return an array with available robots
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;