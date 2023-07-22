import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup('');

  constructor(
    // private autorizationService: AutorizationService,
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

  // login() {
  //   if (!this.form.invalid) {
  //      let data = this.form.value;
  //     this.autorizationService.login(data)
  //       .subscribe(response => {
  //         if (response.succeeded) {
  //            this.router.navigate(["/home"])
  //         }
  //       })
  //   }
  // }
}
