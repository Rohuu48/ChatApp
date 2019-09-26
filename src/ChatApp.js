import React from "react";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import io from "socket.io-client";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [] //this is an array of objects
    };
    this.socket = io("localhost:4001", { query: `username=${props.user}` });

    this.socket.on("server:message", messageOb => {
      messageOb.from_me = false;
      this.addMessage(messageOb);
    });
  }

  add_user = () => {
    this.socket.emit("add_user", this.props.user);
  };

  addMessage = ob => {
    this.setState({
      messages: this.state.messages.concat(ob)
    });
  };

  onSend = r_msg => {
    const data = {
      username: this.props.user,
      message: r_msg,
      from_me: true
    };

    this.socket.emit("client:message", data);

    this.addMessage(data);
  };

  render() {
    return (
      <div>
        <div className="left_col_settings">
          <Link to="/">
            <button className="exit_settings">Back</button>
          </Link>
        </div>
        <div>
          <p>{this.props.join}</p>
          <Messages msg_list={this.state.messages} />
          <ChatInput name={this.props.user} addToChat={this.onSend} />
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(ChatApp));
