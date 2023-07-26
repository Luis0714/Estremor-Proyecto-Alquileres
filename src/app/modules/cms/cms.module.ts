import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { GridComponent } from './pages/grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RolsComponent } from './pages/rols/rols.component'
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { WebsiteModule } from '../website/website.module';


// PrimeNg
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    GridComponent,
    RolsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    WebsiteModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],

  providers:
  [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CmsModule { }
