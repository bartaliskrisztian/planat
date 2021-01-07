import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DetailView from "./components/DetailView";
import Search from "./components/Search";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search-results">
            <Search />
          </Route>
          <Route exact path="/details">
            <DetailView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
