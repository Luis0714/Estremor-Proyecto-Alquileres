import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuDesktopComponent } from '../shared/components/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from '../shared/components/menu-mobile/menu-mobile.component';
import {OverlayModule} from '@angular/cdk/overlay';


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
    OverlayModule,
  ]
})
export class WebsiteModule { }
