import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor
  (
    private authService:AuthService,
    private router:Router
  )
  {

  }
  canActivate(){
    const token = this.authService.user$
    .pipe(
      map(user => {
        if(!user){
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
    return false; // cambiar a true
  }
  
}
