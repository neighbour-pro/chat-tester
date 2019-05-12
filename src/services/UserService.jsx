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

  getConversations(conversationId){
    return this.service.get('conversation/'+conversationId)
      .then(res => res)
      .catch(err => console.log(err));
  }
}