import axios from 'axios';

export default class UserService{
  constructor(){
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api/',
      withCredentials: true,
    });
  }

  getUserData(id){
    return this.service.get('user/'+id)
      .then(res => res)
      .catch(err => console.log(err));
  }

  getConversations(userId){
    return this.service.get('conversation/'+userId)
      .then(res => res)
      .catch(err => console.log(err));
  }

  getConversation(conversationId){
    return this.service.get('conversation/'+conversationId+'/messageList')
      .then(res => res)
      .catch(err => console.log(err));
  }

  addMessage(conversationId, userId, message){
    
    return this.service.post('conversation/'+conversationId+'/addMessage', {text:message, userId})
      .then(res => res)
      .catch(err => console.log(err));
  }
}