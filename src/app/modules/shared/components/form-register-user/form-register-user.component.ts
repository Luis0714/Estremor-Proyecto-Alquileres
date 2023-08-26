import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-form-register-user',
  templateUrl: './form-register-user.component.html',
  styleUrls: ['./form-register-user.component.scss']
})
export class FormRegisterUserComponent {

  form: FormGroup = new FormGroup('')
  rols = []


  constructor(
    private formBuilder: FormBuilder
  ){}

  formBuider(){
    this.form = this.formBuilder.group({
      Name:['Luis', Validators.required],
      LastName:['Luis', Validators.required],
      SecundLastName:['Luis', Validators.required]
    });
  }

  FileUpload(){
    
  }
}
