import React from "react";

class Message extends React.Component {
  render() {
    if (this.props.me) {
      return (
        <div style={{ textAlign: "right" }}>
          {this.props.user}:{this.props.text}
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "left" }}>
          {this.props.user}:{this.props.text}
        </div>
      );
    }
  }
}

export default Message;
