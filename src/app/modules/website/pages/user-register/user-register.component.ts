import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/confirmation-modal/confirmation-modal.component';
import { TitlesModals } from 'src/Common/titles-modals';
import { QuestionsModals } from 'src/Common/questions-modals';
import { Icons } from 'src/Common/icons';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
   form: FormGroup = new FormGroup('');
   imageUrl: string | ArrayBuffer | null = null;
   selectedImage: Blob = new Blob();
  constructor(
    private formBuilder: FormBuilder,
    private dialog: Dialog
  ){
    this.builForm();
  }

  builForm(){
    this.form = this.formBuilder.group({
      Name:['Luis', Validators.required],
      LastName:['Luis', Validators.required],
      SecundLastName:['Luis', Validators.required]
    });
  }

  onImageSelected(event: any){
    if (event.target.files && event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];

            // Mostrar la imagen en la interfaz
            const reader = new FileReader();
            reader.onload = (e: any) => {
              this.imageUrl = e.target.result;
            };
            reader.readAsDataURL(this.selectedImage);
          }
  }
  uploadImage(){

  }


  deleteImage(): void {
    this.openModal();
    this.imageUrl = null;
    this.selectedImage = new Blob();
  }

  openModal(){
   let dialogRef =  this.dialog.open(ConfirmationModalComponent, {
      minWidth: '400px',
      minHeight: '80%',
      maxWidth: '50%',
      data:{
       title: TitlesModals.Confirmation,
       question: QuestionsModals.DeleteImageUser,
       iconClass: Icons.Question
      }
    })

    dialogRef.closed.subscribe(output =>{
      console.log(output);
    });
  }
}
