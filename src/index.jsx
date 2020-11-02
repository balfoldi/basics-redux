import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Reducer from "./pages/Reducer";
import MultipleReducer from "./pages/MultipleReducer";

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route path="/reducer">
            <Reducer />
          </Route>
          <Route path="/multiple-reducer">
            <MultipleReducer />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
