import React, { Component } from 'react';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false; // Never update this component  
  }

  render() {
    return (
    <div>
      <h1 className='f1'>RoboFriends</h1>
      {/* <CounterButton color={'red'} /> */}
    </div>
    )
  }
}

export default Header;