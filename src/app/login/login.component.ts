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
      emailFormEx: [null, [Validators.required, Validators.email]],
      passwordFormEx: [null, Validators.required],
    });
  }

  get emailFormEx() { return this.validateForm.get('emailFormEx'); }
  get passwordFormEx() { return this.validateForm.get('passwordFormEx'); }

  ngOnInit() {
  }

  home() {
    this.route.navigate(['home']);
  }

}
