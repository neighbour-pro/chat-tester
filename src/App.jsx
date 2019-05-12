import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/login" render={()=> <p>Login</p>}/>
        <Route exact path="/signup" render={()=> <p>Signup</p>}/>
        <Route exact path="/conversations" render={()=> <p>Conversations list</p>}/>
        <Route render={()=> <Redirect to="/login"/>}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
