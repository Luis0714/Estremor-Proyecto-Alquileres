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
  
    getToken() {
      const token = sessionStorage.getItem('Token')
      return token;
    }
    removeToken(){
      sessionStorage.removeItem('Token')
    }
}
