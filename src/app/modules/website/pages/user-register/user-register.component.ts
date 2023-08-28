import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/confirmation-modal/confirmation-modal.component';
import { TitlesModals } from 'src/app/common/titles-modals';
import { QuestionsModals } from 'src/app/common/questions-modals';
import { Icons } from 'src/app/common/icons';
import { DocumentType } from 'src/app/models/documentType.model';
import { DocumentTypeService } from 'src/app/services/document-type.service';
import { RolModel } from 'src/app/models/rol.model';
import { RolService } from 'src/app/services/rol.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  form: FormGroup = new FormGroup('');
  imageUrl: string | ArrayBuffer | null = null;
  selectedImage: Blob = new Blob();
  documentsTypes: DocumentType[] = [];
  rols: RolModel[] = []
  constructor(
    private formBuilder: FormBuilder,
    private dialog: Dialog,
    private documentTypeService: DocumentTypeService,
    private rolService: RolService
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
      var data = this.form.value;
      console.log(data);
    }
  }

  getDocumentsTypes() {
    this.documentTypeService.getAllDocumentsTypes().subscribe({
      next: (response) => {
        this.documentsTypes = response.data;
      },
      error: (err) => {
        alert("ah ocurido un error al obtener los tipos de documento")
      }
    });
  }
  getRols() {
    this.rolService.getAllRols().subscribe({
      next: (response) => {
        this.rols = response.data;
      },
      error: (err) => {
        alert("ah ocurido un error al obtener los roles")
      }
    });
  }

  onImageSelected(event: any) {
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
  uploadImage() {

  }


  deleteImage(): void {
    this.openModal();
    this.imageUrl = null;
    this.selectedImage = new Blob();
  }

  openModal() {
    let dialogRef = this.dialog.open(ConfirmationModalComponent, {
      minWidth: '400px',
      minHeight: '80%',
      maxWidth: '50%',
      data: {
        title: TitlesModals.Confirmation,
        question: QuestionsModals.DeleteImageUser,
        iconClass: Icons.Question
      }
    })

    dialogRef.closed.subscribe(output => {
      console.log(output);
    });
  }
}
