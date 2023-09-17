import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ConfirmationModalComponent } from '../modules/shared/components/confirmation-modal/confirmation-modal.component';
import { TypeModal } from './../common/type-modal';
import { Icons } from '../common/icons';
import { TitlesModals } from '../common/titles-modals';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(

  ) { }

  showConfirmation(message:string, dialog: Dialog): DialogRef<unknown,ConfirmationModalComponent>{
   return dialog.open(ConfirmationModalComponent, {
      minWidth: '400px',
      minHeight: '80%',
      maxWidth: '50%',
      data: {
        title: TitlesModals.Confirmation,
        question: message,
        iconClass: Icons.Question,
        type:TypeModal.Confirmation
      }
    })
  }

  showError(message:string, dialog: Dialog): DialogRef<unknown,ConfirmationModalComponent>{
    return dialog.open(ConfirmationModalComponent, {
       minWidth: '400px',
       minHeight: '80%',
       maxWidth: '50%',
       data: {
         title: TitlesModals.Error,
         question: message,
         iconClass: Icons.Error,
         type:TypeModal.Error
       }
     })
   }

   showAlert(message:string, dialog: Dialog): DialogRef<unknown,ConfirmationModalComponent>{
    return dialog.open(ConfirmationModalComponent, {
       minWidth: '400px',
       minHeight: '80%',
       maxWidth: '50%',
       data: {
         title: TitlesModals.Alert,
         question: message,
         iconClass: Icons.Alert,
         type:TypeModal.Alert
       }
     })
   }
   showSucceed(message:string, dialog: Dialog): DialogRef<unknown,ConfirmationModalComponent>{
    return dialog.open(ConfirmationModalComponent, {
       minWidth: '400px',
       minHeight: '80%',
       maxWidth: '50%',
       data: {
         title: TitlesModals.Succeed,
         question: message,
         iconClass: Icons.Succeed,
         type:TypeModal.Succeed
       }
     })
   }
}
