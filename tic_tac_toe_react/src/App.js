import React from 'react';
import Game from "./container/Game";
import PickSide from "./container/PickSide";
import { Route, Switch } from "react-router";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/game">
          <Game xNext={true}/>
        </Route>
        <Route path="/">
          <PickSide />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
