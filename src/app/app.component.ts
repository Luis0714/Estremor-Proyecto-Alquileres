import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { StoreService } from './services/store.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Estremor-Alquileres';

  constructor
  (
    private tokenService: TokenService,
    private authService: AuthService
  ){

  }

  ngOnInit(){
    this.userLogged();
  }
  userLogged(){
    const token = this.tokenService.getToken();
    if(token){
      this.authService.getProfile()
      .subscribe();
    }
  }
}
