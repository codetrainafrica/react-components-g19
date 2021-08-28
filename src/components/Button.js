import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        style={{
          padding: 16,
          backgroundColor: this.props.bColor,
          borderRadius: 10,
        }}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
