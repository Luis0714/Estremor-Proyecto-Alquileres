import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Environment } from 'src/environments/environment';
import { Credentials } from '../models/credentials.model';
import { Response } from '../models/response.model';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { StoreService } from './store.service';
import { checkToken } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private server = `${Environment.server}/account`;

 
  constructor(
    private Http:HttpClient,
    private tokenservice : TokenService,
    private router:Router,
    private storeService: StoreService
  ) { }
  login(credentials:Credentials):Observable<Response<string>>{
    return this.Http.post<Response<string>>(`${this.server}/authenticate`,credentials)
          .pipe(
            tap(response => {
              this.tokenservice.saveToken(response.data);
              this.getProfile().subscribe();
            })
          );
  }
  getProfile():Observable<Response<Partial<User>>>{
    return this.Http.get<Response<Partial<User>>>(`${this.server}/profile`,{ context: checkToken() })
    .pipe(
      tap(response =>this.storeService.user.next(response.data))
    );
  }

  logout(){
    this.tokenservice.removeToken();
    this.storeService.user = new BehaviorSubject<Partial<User> | null>(null);
    this.router.navigate(['/login']);
  }
}
