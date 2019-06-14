import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UserService } from '../../services/service.index';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  validateForm: FormGroup;
  users: User[] = [];
  previous: User[] = [];
  elements = ['Documento', 'Nombre completo'];
  loading: boolean;
  firstItemIndex;
  lastItemIndex;

  constructor( public fb: FormBuilder, public userService: UserService,
              public tableService: MdbTableService, private cdRef: ChangeDetectorRef, public router: Router ) {
    this.loading = false;
    this.validateForm = fb.group({
      documentFormEx: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('^[0-9]*$') ] ),
      nameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z ]+$') ] ),
      surnameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z ]+$') ] ),
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

  ngOnInit() {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(7);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  addUser() {
    console.log(this.validateForm);
    if ( this.validateForm.invalid ) { return; }
    console.log(this.validateForm.value);
    console.log( 'Formulario válido: ' + this.validateForm.valid);
    this.loading = true;
    const user = new User(
      this.validateForm.value.documentFormEx,
      this.validateForm.value.nameFormEx,
      this.validateForm.value.surnameFormEx,
      this.validateForm.value.passwordFormEx
    );
    this.userService.postUser(user).subscribe( response => {
      console.log(response);
      this.loading = false;
      this.loadUsers();
      this.clearForm();
      // @ts-ignore
      swal({ title: 'Registro completo', text: 'Ahora este usuario tiene acceso al vivero.', icon: 'success', buttons: false, timer: 2400 });
    });
  }

  updateUser( user: User ) {
    this.router.navigate(['/edituser', user.CC]);
  }

  deleteUser( user: User ) {
    if ( user.CC === this.userService.user.CC ) {
      // @ts-ignore
      swal('No se puede eliminar este usuario', 'Inválido borrarse a sí mismo.', 'warning', { buttons: false, timer: 2000 });
      return;
    }
    // @ts-ignore
    swal({
      title: '¿Está seguro?',
      text: `Eliminará al usuario ${user.nombre}`,
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true
    }).then( willDelete => {
      if (willDelete) {
        this.userService.deleteUser(user.CC).subscribe( response => {
          console.log(response);
          swal('Usuario eliminado', `El usuario ${user.nombre} ha sido eliminado`, {
            icon: 'success',
            buttons: {
              confirm: {
                text: 'Aceptar',
                value: null,
                visible: true,
                className: 'light-green',
                closeModal: true
              }
            }
          });
          this.loadUsers();
        });
      } else {
        // @ts-ignore
        swal( 'El usuario sigue siendo seguro', {
          buttons: {
            confirm: {
              text: 'Aceptar',
              value: true,
              visible: true,
              className: 'light-green',
              closeModal: true
            }
          },
          timer: 2400
        });
      }
    });
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUser().subscribe( (data: any) => {
      this.users = data.result;
      this.tableService.setDataSource(this.users);
      this.users = this.tableService.getDataSource();
      this.previous = this.tableService.getDataSource();
      this.loading = false;
    });
  }

  equals( fieldOne: string, fieldTwo: string ) {
    return (formGroup: FormGroup) => {
      const dataOne = formGroup.controls[fieldOne].value;
      const dataTwo = formGroup.controls[fieldTwo].value;

      if ( dataOne === dataTwo ) { return null; }
      return { equals: true };
    };
  }

  clearForm() {
    this.validateForm.reset();
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

}
