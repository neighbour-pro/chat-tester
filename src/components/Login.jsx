import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: 'client@a.com',
      password: '1'
    };
  }

  submitForm(e){
    e.preventDefault();
    this.props.login(this.state);
  }

  handleChange(e, key){
    this.setState({
      ...this.state,
      [key]: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.loggedUser ? <Redirect to="/conversations"/> : null
        }
        <form onSubmit={(e)=>this.submitForm(e)}>
          <input type="text" placeholder="Email" onChange={(e)=>this.handleChange(e, 'email')} name="email" value={this.state.email}/>
          <input type="text" placeholder="Password" onChange={(e)=>this.handleChange(e, 'password')} name="password" value={this.state.password}/>
          <button type="submit">Login</button>
        </form>
      </React.Fragment>
    )
  }
}
