import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Input,EventEmitter,Output, Inject } from '@angular/core';
interface InputData{
  title: string,
  question: string,
  iconClass?: string
}

interface OutputData{
  response: boolean
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
  constructor(
    private dialog: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: InputData
    ){
      this.title = data.title;
      this.question = data.question;
      this.iconClass = data.iconClass;
  }
  close(){
    this.dialog.close();
  }

  closeWithResponse(response: boolean){
    this.dialog.close({response});
  }
}
