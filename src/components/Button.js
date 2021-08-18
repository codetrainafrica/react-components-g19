import React from "react";
import Text from "./Text";

class Button extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <button>
        <Text chicken="jfjfjfj" />
      </button>
    );
  }
}

export default Button;
