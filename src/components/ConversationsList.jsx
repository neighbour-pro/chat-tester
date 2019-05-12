import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';


export default class ConversationsList extends Component {

  constructor(props){
    super(props);
    this.state = {
      conversations: []
    };
    this._userService = new UserService();
  }

  componentDidMount(){
    this.props.checkLogin();
    if(this.props.loggedUser){
      this._userService.getConversations(this.props.loggedUser._id)
        .then(conversations => {
          this.setState({
            ...this.state,
            conversations:conversations.data.conversations
          });
        })
        .catch(err => console.log(err));
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {
          this.props.loggedUser ? null : <Redirect to="/login"/>
        }
        <div>
          <h1>Conversations List</h1>
          <ul>
            {
              this.state.conversations.map(conversation => {
                if(this.props.loggedUser._id === conversation.client_id._id){
                  return <li key={conversation._id}><Link to={`/conversations/${conversation._id}`}>{conversation.professional_id.name}</Link></li>
                }
                if(this.props.loggedUser._id === conversation.professional_id._id){
                  return <li key={conversation._id}><Link to={`/conversations/${conversation._id}`}>{conversation.client_id.name}</Link></li>
                }
                return 'Messager not found'
              })
            }
          </ul>
        </div>
      </React.Fragment>
    )
  }
}
