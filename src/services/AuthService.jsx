import axios from 'axios';

export default class AuthService{
  constructor(){
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api/',
      withCredentials: true,
    });
  }

  login(email, password){
    return this.service.post('/auth/login', {
      email,
      password
    }, {withCredentials: true})
    .then(res => res.data);
  }
}