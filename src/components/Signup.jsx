import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.isUserLogged ? <Redirect to="/conversations"/> : null
        }
        <div>
          Signup
        </div>
      </React.Fragment>
    )
  }
}
