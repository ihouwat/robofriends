import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true //If state changes, render again
    }
    return false // If not, do not render again
  }

  updateCount = () => {
    this.setState(state => {
      return { count: this.state.count + 1 }
    })
  }

  render() {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton;