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
import { NgxSpinnerModule } from "ngx-spinner";

// PrimeNg
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
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
    TableModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule,
    FileUploadModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],

  providers:
  [ ConfirmationService, MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CmsModule { }
