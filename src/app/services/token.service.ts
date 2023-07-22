import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(

    ) { }
  
    saveToken(token: string) {
      sessionStorage.setItem('Token', token);
    }
    saveUserToken(user: User) {
      const userJSON = JSON.stringify(user);
      sessionStorage.setItem('UserSesion', userJSON);
    }
  
    getToken() {
      const token = sessionStorage.getItem('Token')
      return token;
    }
    removeToken(){
      sessionStorage.removeItem('Token')
    }
}
