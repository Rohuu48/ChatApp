import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainMenu from "./MainMenu";
import Settings from "./Settings";
import ChatHome from "./ChatHome";
import ChatApp from "./ChatApp";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact Component={<MainMenu />} />
        <Route exact path="/login" exact Component={<ChatHome />} />
        <Route exact path="/chat" exact Component={<ChatApp />} />

        <Route exact path="/settings" exact Component={<Settings />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
