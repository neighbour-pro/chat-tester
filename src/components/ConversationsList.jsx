import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class ConversationsList extends Component {

  componentDidMount(){
    this.props.checkLogin();
  }
  
  render() {
    return (
      <React.Fragment>
        {
          this.props.isUserLogged ? null : <Redirect to="/login"/>
        }
        <div>
          Lista de conversaciones
        </div>
      </React.Fragment>
    )
  }
}
