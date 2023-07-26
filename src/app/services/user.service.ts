import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { Environment } from 'src/environments/environment';
import { FormUtil } from '../utils/form.util';
import { checkToken } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private server = `${Environment.server}/user`;
  constructor
  (
    private Http:HttpClient,
    private router:Router
  ) { }

  createUser(data:Partial<User>):Observable<Response<User>>{
    const formData = FormUtil.buildFormData(data);
    return this.Http.post<Response<User>>(`${this.server}/createUser`,formData);
  }
  getAllUsers():Observable<Response<Partial<User>[]>>{
    return this.Http.get<Response<Partial<User>[]>>(`${this.server}/getAllUsers`,{ context: checkToken() })
  }
}
