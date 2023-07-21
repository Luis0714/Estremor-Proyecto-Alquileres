import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuDesktopComponent } from './components/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';


@NgModule({
  declarations: 
  [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FontAwesomeModule,
  ]
})
export class WebsiteModule { }
