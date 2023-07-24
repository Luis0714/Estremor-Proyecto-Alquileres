import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from 'src/app/models/estate.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup('');
  state:State = 'init';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.builForm();
  }

  builForm() {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

  }

  login() {
    if (!this.form.invalid) {
      this.state = 'loading';
       let data = this.form.value;
      this.authService.login(data)
        .subscribe({
          next:(response) => {
            if (response.succeeded) {
              this.router.navigate(["/website"])
              console.log(response.message,response.data);
              this.state = 'success';
           }
          },
          error:(err)=>{
            console.log(err.message);
            this.state = 'failed';
          }
        }) 
    }else{
      console.log('formulario invalido')
    }
  }
}
