import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        style={{ color: this.props.color }}
        onClick={this.props.handleClick}
      >
        {this.props.btnTitle}
      </button>
    );
  }
}

export default Button;
