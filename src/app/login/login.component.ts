import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(public fb: FormBuilder, public route: Router) {
    this.validateForm = fb.group({
      // @ts-ignore
      documentFormEx: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)], Validators.pattern('^[0-9]*$')),
      passwordFormEx: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    });
  }

  get documentFormEx() { return this.validateForm.get('documentFormEx'); }
  get passwordFormEx() { return this.validateForm.get('passwordFormEx'); }

  ngOnInit() {
  }

  home() {
    this.route.navigate(['home']);
  }

}
