import axios from 'axios';

export default class AuthService{
  constructor(){
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api/',
      withCredentials: true,
    });
  }

  isUserLogged(){
    return this.service.get('auth/logged')
      .then(res => res)
      .catch(err => console.error(err));
  }

  logout(){
    return this.service.post('auth/logout', {})
      .then(res => res)
      .catch(err => console.error(err));
  }

}