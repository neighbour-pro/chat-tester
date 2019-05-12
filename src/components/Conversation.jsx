import React, { Component } from 'react';
import UserService from '../services/UserService';
import {Redirect} from 'react-router-dom';

export default class Conversation extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      conversation: {
        messages: []
      }
    };
    this._userService = new UserService();
  }

  componentDidMount(){
    this.props.checkLogin();
    if(this.props.loggedUser){
      this.setState({
        ...this.state,
        userId: this.props.loggedUser._id,
        user_name: this.props.loggedUser.name
      });
      this._userService.getConversation(this.props.match.params.id)
      .then(conversation => {
        this.setState({
          ...this.state,
          conversation: conversation.data.conversation
        });
      })
      .catch(err => console.log(err));
    }
  }

  writeText(e, key){
    this.setState({
      ...this.state,
      [key]: e.target.value
    });
  }

  sendMessage(e){
    e.preventDefault();
    console.log(this.state)
    this._userService.addMessage(this.props.match.params.id, this.state.userId, this.state.text)
      .then(res => this._userService.getConversation(this.props.match.params.id))
      .then(conversation => this.setState({
        ...this.state,
        text: '',
        conversation: conversation.data.conversation
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.loggedUser ? null : <Redirect to="/login"/>
        }
        <div>
          <h1>Lista de mensajes | {this.state.user_name}</h1>
          <ul>
            {
              this.state.conversation.messages.map(message => <li key={message._id}><p>Hola mundo<span> | {message.user_id.name}</span></p></li>)
            }
          </ul>
          <h2>Enviar mensajes</h2>
          <form>
            <input type="text" name="text" value={this.state.text} onChange={(e)=>this.writeText(e, 'text')}/>
            <button onClick={(e)=>this.sendMessage(e)} type="submit">Send</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
