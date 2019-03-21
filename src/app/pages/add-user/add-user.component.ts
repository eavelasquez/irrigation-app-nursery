import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UserService } from '../../services/service.index';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  validateForm: FormGroup;

  constructor( public fb: FormBuilder, public userService: UserService ) {
    this.validateForm = fb.group({
      documentFormEx: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('^[0-9]*$') ] ),
      nameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$') ] ),
      surnameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$') ] ),
      emailFormEx: new FormControl(null, [Validators.minLength(12), Validators.maxLength(36), Validators.email ] ),
      passwordFormEx: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      passwordConfirmFormEx: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    }, { validators: this.equals('passwordFormEx', 'passwordConfirmFormEx') } );
  }

  get documentFormEx() { return this.validateForm.get('documentFormEx'); }
  get nameFormEx() { return this.validateForm.get('nameFormEx'); }
  get surnameFormEx() { return this.validateForm.get('surnameFormEx'); }
  get emailFormEx() { return this.validateForm.get('emailFormEx'); }
  get passwordFormEx() { return this.validateForm.get('passwordFormEx'); }
  get passwordConfirmFormEx() { return this.validateForm.get('passwordConfirmFormEx'); }

  ngOnInit() {}

  addUser() {
    if ( this.validateForm.invalid ) { return; }
    console.log(this.validateForm.value);
    console.log( 'Formulario válido: ' + this.validateForm.valid);
    const user = new User(
      this.validateForm.value.documentFormEx,
      this.validateForm.value.nameFormEx,
      this.validateForm.value.surnameFormEx,
      this.validateForm.value.passwordFormEx
    );
    this.userService.postUser( user ).subscribe( response => {
      console.log( response );
    });
    // @ts-ignore
    swal({ title: 'Registro completo', text: 'Ahora este usuario tiene acceso al vivero.', icon: 'success', buttons: false, timer: 2400 });
  }

  equals( fieldOne: string, fieldTwo: string ) {
    return (formGroup: FormGroup) => {
      const dataOne = formGroup.controls[fieldOne].value;
      const dataTwo = formGroup.controls[fieldTwo].value;

      if ( dataOne === dataTwo ) { return null; }
      return { equals: true };
    };
  }

}
