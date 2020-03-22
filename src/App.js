import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { CupTest } from './features/cupTest/CupTest';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CupTest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
