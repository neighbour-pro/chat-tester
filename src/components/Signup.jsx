import React, { Component } from "react";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: "",
      password: ""
    };
  }

  handleChange(e, key) {
    const state = { ...this.state };
    state[key] = e.target.value;
    this.setState({
      ...state
    });
  }

  submit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            onChange={e => this.handleChange(e, "name")}
          />
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
          <button onClick={e => this.submit(e)}>Signup</button>
        </form>
      </div>
    );
  }
}
