import React, { Component } from "react";

// export default class Button extends Component {
//   render() {
//     console.log(this.props);
//     return <button>{this.props.title}</button>;
//   }
// }

const Button = (props) => {
  return <button>{props.title}</button>;
};

export default Button;
