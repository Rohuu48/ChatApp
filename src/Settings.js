import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import SettingsTable from "./SettingsTable";

import { setTheme } from "./actions/setTheme";
const Settings = props => {
  return (
    <div className="settings_page">
      <div className="left_col_settings">
        <Link to="/">
          <button className="exit_settings">Back</button>
        </Link>
      </div>
      <div className="mid_col_settings">
        <SettingsTable settings={props} />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  theme: state.settings.theme
});

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setTheme: setTheme
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(Settings)
);
