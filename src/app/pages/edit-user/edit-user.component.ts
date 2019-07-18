import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/service.index';
import { UpdateUser } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [``]
})
export class EditUserComponent implements OnInit {

  validateForm: FormGroup;
  user: UpdateUser = new UpdateUser('', '', '');

  // Services need injected in the constructor
  constructor( public fb: FormBuilder, public userService: UserService, public activatedRoute: ActivatedRoute, public router: Router ) {
    // Get param of url - Route parameter CC
    this.activatedRoute.params.subscribe(params => {
      const CC = params['CC'];
      this.loadUser(CC);
    });

    // Form reactive with her controls - Fields validated
    this.validateForm = fb.group({
      documentFormEx: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('^[0-9]*$') ] ),
      nameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$') ] ),
      surnameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$') ] ),
      emailFormEx: new FormControl(null, [Validators.minLength(12), Validators.maxLength(36), Validators.email ] )
    });
  }

  // These getters provides easy access to the fields
  get documentFormEx() { return this.validateForm.get('documentFormEx'); }
  get nameFormEx() { return this.validateForm.get('nameFormEx'); }
  get surnameFormEx() { return this.validateForm.get('surnameFormEx'); }
  get emailFormEx() { return this.validateForm.get('emailFormEx'); }

  // A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
  ngOnInit() {
  }

  // Load user function using his document
  loadUser( CC: string ) {
    this.userService.findUser(CC).subscribe( response => {
      this.user = response;
      console.log(response);
    });
  }

  // Clean function, to clear fields
  clearForm() {
    this.validateForm.reset();
  }

  // Event of user update - This function update a user using his document
  updateUser() {
    console.log(this.validateForm.invalid);
    if (this.validateForm.value) { return; }
    // Create user object  for send update
    const user = new UpdateUser(
      this.validateForm.value.documentFormEx,
      this.validateForm.value.nameFormEx,
      this.validateForm.value.surnameFormEx
    );
    // User service for sending request update
    this.userService.putUser(user).subscribe(response => {
      console.log(response);
      this.clearForm();
      // @ts-ignore - Generate alert of update user complete
      swal({title: 'Usuario actualizado', text: `El usuario ${ user.nombre } ha sido actualizado.`, icon: 'success', buttons: false, timer: 2400});
      this.cancelUpdate();
    });
  }

  // Function to cancel user update - Redirect for users list
  cancelUpdate() {
    this.router.navigate(['/adduser']);
  }

}
