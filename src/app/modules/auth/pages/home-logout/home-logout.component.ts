import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-logout',
  templateUrl: './home-logout.component.html',
  styleUrls: ['./home-logout.component.scss']
})
export class HomeLogoutComponent implements OnInit {
  faAngleUp = faAngleUp;
  email: string = "";
  form: FormGroup = new FormGroup('');

  constructor(private router: Router, private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''] // Definimos un FormControl para el campo de email
    });
  }
  redirectToRegistro() {
    const email = this.form.value.email; // Obtenemos el valor del campo de email
    this.router.navigate(['/register'], { queryParams: { email: email } });
  }
}
