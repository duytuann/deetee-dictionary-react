import React from "react";
import { Switch, Route } from "react-router-dom"; // Redirect

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Dictionary from "./pages/dictionary/dictionary.component";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exatt path="/dictionary" component={Dictionary} />
        </Switch>
      </div>
    );
  }
}

export default App;
