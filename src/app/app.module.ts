import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './components/common/button/button.component';
import { HeaderComponent } from './components/master-page/header/header.component';
import { FooterComponent } from './components/master-page/footer/footer.component';
import { HomeComponent } from './components/master-page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
