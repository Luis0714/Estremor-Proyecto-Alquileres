import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/authenticate/login/login.component';
import { ButtonComponent } from './components/common/button/button.component';
import { HeaderComponent } from './components/master-page/header/header.component';
import { FooterComponent } from './components/master-page/footer/footer.component';
import { HomeComponent } from './components/master-page/home/home.component';
import { MenuMobileComponent } from './components/master-page/menus/menu-mobile/menu-mobile.component';
import { MenuDesktopComponent } from './components/master-page/menus/menu-desktop/menu-desktop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/common/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuMobileComponent,
    MenuDesktopComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
