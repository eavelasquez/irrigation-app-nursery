import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/service.index';
import { AuthUser } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['']
})
export class LoginComponent implements OnInit {

  title = 'Vivero CTGI';
  validateForm: FormGroup;

  // Services need injected in the constructor
  constructor(public fb: FormBuilder, public router: Router, public userService: UserService) {
    // Form reactive with her controls - Fields validated
    this.validateForm = fb.group({
      documentFormEx: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      passwordFormEx: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
    });
  }

  // These getters provides easy access to the fields
  get documentFormEx() { return this.validateForm.get('documentFormEx'); }
  get passwordFormEx() { return this.validateForm.get('passwordFormEx'); }

  // A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
  ngOnInit() {
  }

  // Event of user authenticated - The submit event is emitted by the form tag using the native DOM event
  onSubmit() {
    if ( this.validateForm.invalid ) { return; }
    console.log('Formulario válido: ' + this.validateForm.value);
    // Create user object  for send post
    const user = new AuthUser (
      this.validateForm.value.documentFormEx,
      this.validateForm.value.passwordFormEx
    );
    // User service for sending post request with credentials of user
    this.userService.loginUser(user).subscribe( () => this.router.navigate(['/home']));
  }
}
