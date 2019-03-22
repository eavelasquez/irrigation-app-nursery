import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/service.index';
import { AuthUser } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(public fb: FormBuilder, public router: Router, public userService: UserService) {
    this.validateForm = fb.group({
      documentFormEx: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      passwordFormEx: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
    });
  }

  get documentFormEx() { return this.validateForm.get('documentFormEx'); }
  get passwordFormEx() { return this.validateForm.get('passwordFormEx'); }

  ngOnInit() {
  }

  login() {
    if ( this.validateForm.invalid ) { return; }
    console.log(this.validateForm.value);
    console.log('Formulario válido: ' + this.validateForm.valid);
    const user = new AuthUser (
      this.validateForm.value.documentFormEx,
      this.validateForm.value.passwordFormEx
    );
    this.userService.loginUser(user).subscribe( () => this.router.navigate(['home']));
  }
}
