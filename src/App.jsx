import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Switch>
      <Route path="/login" render={() => <Login/>} />
      <Route path="/signup" render={() => <Signup/>} />
      <Route exact path="/conversations" render={() => <p>/conversations</p>} />
      <Route
        path="/conversations/:id"
        render={() => <p>/conversations/:id</p>}
      />
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
}

export default App;
