import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));