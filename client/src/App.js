import React from "react";
import { Switch, Route } from "react-router-dom"; // Redirect

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Dictionary from "./pages/dictionary/dictionary.component";
import Word from "./pages/word/word.component";
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Header {...props} homepage="homepage" />}
          />
          <Route exact path="/*" render={(props) => <Header {...props} />} />
        </Switch>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dictionary" component={Dictionary} />
          <Route exact path="/dictionary/:word" component={Word} />
        </Switch>
      </div>
    );
  }
}

export default App;
