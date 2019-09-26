import React from "react";
import io from "socket.io-client";

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      typingmsg: "",
      status: false
    };
    this.socket = io("localhost:4001", { query: `username=${props.name}` });
    this.socket.on("server:typingStatus", (typmsg, stat) =>
      this.typing(typmsg, stat)
    );
  }
  change = event => {
    this.setState({
      message: event.target.value
    });
  };
  typing = (typmsg, stat) => {
    this.setState(
      {
        typingmsg: typmsg,
        status: stat
      },
      () => {
        this.setState({ status: false });
        console.log(this.state.typingmsg);
      }
    );
  };
  typingFunction = () => {
    this.socket.emit("client:typing", `${this.props.name} is typing`, true);
  };

  showType = () => {
    this.props.addToChat(this.state.message);

    this.socket.emit("client:typing", "", false);
    this.setState({
      status: false,
      message: ""
    });
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <p>{this.state.typingmsg}</p>
        </div>
        <div style={{ textAlign: "center", position: "fixed", bottom: 20 }}>
          <input
            type="text"
            onChange={this.change}
            onKeyPress={this.typingFunction}
            value={this.state.message}
            placeholder="Enter your message"
          />
          <button onClick={this.showType}>Send</button>
        </div>
      </div>
    );
  }
}

export default ChatInput;
