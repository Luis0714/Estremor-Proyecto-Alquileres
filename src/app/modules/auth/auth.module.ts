import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { HomeLogoutComponent } from './pages/home-logout/home-logout.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuMobileComponent } from '../shared/components/menu-mobile/menu-mobile.component';


@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    ButtonComponent,
    ResetPasswordComponent,
    HomeLogoutComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers:
  [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
})
export class AuthModule { }
