import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import ConversationsList from "./components/ConversationsList";
import AuthService from "./services/AuthService";


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      userLogged: null 
    };
    this._authService = new AuthService();
  }

  checkIfUserIsLogged(){
    this._authService.isUserLogged()
      .then(res => this.setState({
        ...this.state,
        userLogged: res.data
      }))
      .catch(err => {
        this.setState({
          ...this.state,
          userLogged: false
        })
      });
  }

  login(obj){
    const {email, password} = obj;
    this._authService.login(email, password)
      .then(res => this.setState({
        ...this.state,
        userLogged: res.data
      }))
      .catch(err => this.setState({
        ...this.state,
        userLogged: false
      }));
  }

  logout(){
    this._authService.logout()
      .then(res => this.setState({
        ...this.state,
        userLogged: false
      }))
      .catch(err => console.log(err))
  }

  componentDidUpdate(){
    console.log(this.state.userLogged);
  }

  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/login" render={()=> <Login login={(loginObj)=>this.login(loginObj)} isUserLogged={this.state.userLogged}/>}/>
          <Route exact path="/signup" render={()=> <Signup isUserLogged={this.state.userLogged}/>}/>
          <Route exact path="/conversations" render={()=> <ConversationsList checkLogin={()=>this.checkIfUserIsLogged()} isUserLogged={this.state.userLogged}/>}/>
          <Route exact path="/logout" render={()=> <Logout logout={()=>this.logout()}/>}/>
          <Route render={()=> <Redirect to="/login"/>}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
