import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionsModals } from 'src/app/common/questions-modals';
import { DocumentType } from 'src/app/models/documentType.model';
import { DocumentTypeService } from 'src/app/services/document-type.service';
import { RolModel } from 'src/app/models/rol.model';
import { RolService } from 'src/app/services/rol.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'src/app/services/modal.service';
import { Dialog } from '@angular/cdk/dialog';
import { MessagesModals } from 'src/app/common/message.modal';
import { error } from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  form: FormGroup = new FormGroup('');
  imageUrl: string | ArrayBuffer | null = null;
  selectedImage!: File;
  documentsTypes: DocumentType[] = [];
  rols: RolModel[] = [];
  deleteImageConfirmation: boolean | unknown = false;

  constructor(
    private formBuilder: FormBuilder,
    private documentTypeService: DocumentTypeService,
    private rolService: RolService,
    private modalService: ModalService,
    private dialog : Dialog,
    private userService: UserService,
    private router: Router
  ) {
    this.builForm();
  }
  ngOnInit(): void {
    this.getDocumentsTypes();
    this.getRols();
  }

  builForm() {
    this.form = this.formBuilder.group({
      Name: ['Luis', Validators.required],
      LastName: ['Estremor', Validators.required],
      SecondLastName: ['Martinez', Validators.required],
      FileImage: [],
      DateOfBirth: ['03/03/2002', Validators.required],
      numberPhone: ['3048976577', Validators.required],
      Document: ['11016354332', Validators.required],
      Email: ['User@example.com', Validators.required],
      Password: ['Estremor123*', Validators.required],
      DocumentTypeId: ['1', Validators.required],
      Address: ['Carrera 31 # 68 - A35', Validators.required],
      RolId: ['1', Validators.required]
    });
  }

  registerUser() {

    if (this.form.valid) {
      var data: Partial<User> = {
        ...this.form.value
      };
      if (this.selectedImage) {
          data.fileImage = this.selectedImage;
      }
      this.userService.createUser(data).subscribe({
       next: (response) =>{
          if(response.succeeded){
            this.modalService.showSucceed(response.message,this.dialog);
            this.router.navigate(['/login']);
          }
       },
       error: (err) => {
        this.modalService.showError(err.error.message,this.dialog);
       }
      });
    }
  }

  getDocumentsTypes() {
    this.documentTypeService.getAllDocumentsTypes().subscribe({
      next: (response) => {
          if(response.succeeded) {
            this.documentsTypes = response.data;
          }
      },
      error: (err) => {
        this.modalService.showError(err.error.message,this.dialog);
      }
    });
  }
  getRols() {
    this.rolService.getAllRols().subscribe({
      next: (response) => {
        if(response.succeeded) {
          this.rols = response.data;
        }
      },
      error: (err) => {
        this.modalService.showError(err.error.message,this.dialog);
      }
    });
  }

  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }
  deleteImage(){
    this.openModal();
  }

  openModal() {
    let dialogRef = this.modalService.showConfirmation(QuestionsModals.DeleteImageUser,this.dialog);
    dialogRef.closed.subscribe((output) => {
      if (typeof output === 'object' && output !== null && 'response' in output) {
        this.deleteImageConfirmation = output.response;
       console.log(this.deleteImageConfirmation)
      }
    });
  }
}
