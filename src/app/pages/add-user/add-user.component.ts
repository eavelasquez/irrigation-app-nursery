import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  validateForm: FormGroup;

  constructor( public fb: FormBuilder ) {
    this.validateForm = fb.group({
      documentFormEx: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('^[0-9]*$') ] ),
      nameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$') ] ),
      surnameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$') ] ),
      emailFormEx: new FormControl(null, [Validators.required, Validators.minLength(20), Validators.maxLength(60), Validators.email ] ),
      passwordFormEx: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    });
  }

  get documentFormEx() { return this.validateForm.get('documentFormEx'); }
  get nameFormEx() { return this.validateForm.get('nameFormEx'); }
  get surnameFormEx() { return this.validateForm.get('surnameFormEx'); }
  get emailFormEx() { return this.validateForm.get('emailFormEx'); }
  get passwordFormEx() { return this.validateForm.get('passwordFormEx'); }

  ngOnInit() {
  }

}
