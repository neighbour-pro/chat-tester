import React, { Component } from "react";
import AuthService from "../services/AuthService";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.AuthService = new AuthService();
  }

  handleChange(e, key) {
    const state = { ...this.state };
    state[key] = e.target.value;
    this.setState({
      ...state
    });
  }

  submit(e) {
    e.preventDefault();
    this.AuthService.login(this.state.email, this.state.password)
      .then(res => this.setState({
        email: '',
        password: ''
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="email"
            onChange={e => this.handleChange(e, "email")}
          />
          <input
            type="password"
            name="password"
            onChange={e => this.handleChange(e, "password")}
          />
          <button onClick={e => this.submit(e)}>Login</button>
        </form>
      </div>
    );
  }
}
