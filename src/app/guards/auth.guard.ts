import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor
  (
    private tokenService:TokenService,
    private router:Router
  )
  {

  }
  canActivate(){
    const token = this.tokenService.getToken();
    if(!token){
      this.router.navigate(['/login']);
      return false;
    }
    return false;

     // return this.storeService.user$
    // .pipe(
    //   map(user => {
    //     if(!user){
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //     return false; // cambiar a true
    //   })
    // );
  }
  
}
