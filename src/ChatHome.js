import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./styles/App.css";
import { Link } from "react-router-dom";
import ChatApp from "./ChatApp";
import io from "socket.io-client";
import MainMenu from "./MainMenu";
import Container from "./Container";

class ChatHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      username: "",
      password: "",
      joining: ""
    };
    this.socket = io("localhost:4001", {
      query: `username=${this.state.username}`
    });
    this.socket.on("join_chat", msg => {
      this.join(msg);
    });
  }

  join = msgjoin => {
    this.setState(
      {
        joining: msgjoin
      },
      () => {
        console.log(this.state.joining);
      }
    );
  };

  change = () => {
    this.socket.emit("add_user", this.state.username);
    this.setState({
      submitted: true
    });
  };
  name = event => {
    this.setState({
      username: event.target.value
    });
  };

  pass = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    if (!this.state.submitted) {
      return (
        <div>
          <div className="left_col_settings">
            <Link to="/">
              <button className="exit_settings">Back</button>
            </Link>
          </div>
          <div>
            Username:
            <input
              onChange={this.name}
              type="text"
              placeholder="Enter username"
            />
            <br />
            Password:
            <input
              onChange={this.pass}
              type="text"
              placeholder="Enter password"
            />
            <br />
            <button onClick={this.change}>Submit</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <ChatApp
            join={this.state.joining}
            user={this.state.username}
            submit={this.state.submitted}
          />
        </div>
      );
    }
  }
}

export default withRouter(connect()(ChatHome));
