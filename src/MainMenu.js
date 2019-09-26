import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "./Container";
import { Link, withRouter } from "react-router-dom";

class MainMenu extends Component {
  render() {
    if (this.props.theme === "dark") {
      document.body.setAttribute("id", "dark_theme");
    } else {
      document.body.setAttribute("id", "light_theme");
    }
    return (
      <div
        className={this.props.theme === "light" ? "light_theme" : "dark_theme"}
      >
        <nav
          style={{ padding: "30px" }}
          className="navbar navbar-expand-lg navbar-yellow bg-light"
        >
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <div className="main_menu">
                  <h2>Welcome!</h2>
                  <Link to="/login">
                    <button className="menu_button">Login</button>
                  </Link>

                  <Link to="/settings">
                    <button className="menu_button">Settings</button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <Container />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  theme: state.settings.theme
});

export default withRouter(connect(mapStateToProps)(MainMenu));
