import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ConversationsList from "./components/ConversationsList";


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/login" render={()=> <Login/>}/>
        <Route exact path="/signup" render={()=> <Signup/>}/>
        <Route exact path="/conversations" render={()=> <ConversationsList/>}/>
        <Route render={()=> <Redirect to="/login"/>}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
