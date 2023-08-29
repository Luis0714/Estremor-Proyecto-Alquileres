import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { OutOutModalConfirmation } from './../../../../models/output.moadalconfirmation.model';
interface InputData{
  title: string,
  question: string,
  iconClass?: string,
  type?: string
}


@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  title: string;
  question: string;
  iconClass: string | undefined = 'fa-solid fa-user';
  type:string | undefined = 'Confirmation';
  constructor(
    private dialog: DialogRef<OutOutModalConfirmation,OutOutModalConfirmation>,
    @Inject(DIALOG_DATA) private data: InputData
    ){
      this.title = data.title;
      this.question = data.question;
      this.iconClass = data.iconClass;
      this.type = data.type;
  }
  close(){
    this.dialog.close();
  }

  closeWithResponse(response: boolean){
    this.dialog.close({response});
  }
}
