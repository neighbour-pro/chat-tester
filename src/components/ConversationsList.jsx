import React, { Component } from 'react'

export default class ConversationsList extends Component {

  componentDidMount(){
    this.props.checkLogin();
  }
  
  render() {
    return (
      <div>
        Lista de conversaciones
      </div>
    )
  }
}
