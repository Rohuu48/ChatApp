import React from "react";
import { Switch, Route } from "react-router-dom";

import MainMenu from "./MainMenu";
import Settings from "./Settings";
import ChatHome from "./ChatHome";
import ChatApp from "./ChatApp";
const Container = () => {
  return (
    <Switch>
      <Route exact path="/" Component={<MainMenu />} />
      <Route exact path="/login" render={() => <ChatHome />} />
      <Route exact path="/chat" render={() => <ChatApp />} />

      <Route exact path="/settings" render={() => <Settings />} />
    </Switch>
  );
};

export default Container;
