import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { TokenService } from '../services/token.service';
import { StoreService } from '../services/store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor
  (
    private tokenService:TokenService,
    private router:Router,
    private storeService:StoreService
  )
  {

  }
  canActivate(){
   
    const token = this.tokenService.getToken();
    if(!token){
      this.router.navigate(['/login']);
      return false;
    }
    return true;

    // return this.storeService.user$
    // .pipe(
    //   map(user => {
    //     console.log('El logeado',user)
    //     if(!user){
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //     return true;
    //   })
    // );
  }
  
}
