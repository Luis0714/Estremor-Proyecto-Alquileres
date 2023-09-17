import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule} from '@angular/cdk/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { HeaderModalComponent } from './components/header-modal/header-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormRegisterUserComponent } from './components/form-register-user/form-register-user.component';
import { HeaderComponent } from './components/header/header.component';
import { InputFileComponent } from './components/input-file/input-file.component';
import { MenuDesktopComponent } from './components/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from '@angular/cdk/overlay';





@NgModule({
  declarations: [
    ButtonComponent,
    ConfirmationModalComponent,
    FooterComponent,
    FormRegisterUserComponent,
    HeaderComponent,
    HeaderModalComponent,
    InputFileComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
    NotFoundComponent,
  ],
  exports: [
    ButtonComponent,
    ConfirmationModalComponent,
    FooterComponent,
    FormRegisterUserComponent,
    HeaderComponent,
    HeaderModalComponent,
    InputFileComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    FontAwesomeModule,
    OverlayModule,
  ]

})
export class SharedModule { }
