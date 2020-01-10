import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

// This example is to show that the code above works like a function
// If you comment out the top code and activate this, we get the same result
// const Hello = (props) => {
//   return (
//     <div className="f1 tc">
//                <h1>Hello World</h1>
//         <p>{props.greeting}</p>
//        </div>
//      );
// }

export default Hello