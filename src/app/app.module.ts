import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './components/common/button/button.component';
import { HeaderComponent } from './components/master-page/header/header.component';
import { FooterComponent } from './components/master-page/footer/footer.component';
import { HomeComponent } from './components/master-page/home/home.component';
import { MenuMobileComponent } from './components/master-page/menus/menu-mobile/menu-mobile.component';
import { MenuDesktopComponent } from './components/master-page/menus/menu-desktop/menu-desktop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuMobileComponent,
    MenuDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
