import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import swal from 'sweetalert';
import { UserService } from '../../services/service.index';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [`
    .md-v-line {
      position: absolute;
      border-left: 1px solid rgba(0,0,0,.125);
      height: 50px;
      top: 0;
      left: 120px;
    }`]
})
export class AddUserComponent implements OnInit, AfterViewInit {
  // Instance for pagination the users
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  public validateForm: FormGroup;
  public users: User[] = [];
  public previous: User[] = [];
  public elements = ['Documento', 'Nombre completo'];
  public loading: boolean;
  public firstItemIndex;
  public lastItemIndex;
  public message: string;

  // Services need injected in the constructor
  constructor(public fb: FormBuilder, public userService: UserService,
    public tableService: MdbTableService, private cdRef: ChangeDetectorRef, public router: Router) {
    this.loading = false;

    // Form reactive with her controls - Fields validated
    this.validateForm = fb.group({
      documentFormEx: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      nameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z ]+$')]),
      surnameFormEx: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('^[a-zA-Z ]+$')]),
      passwordFormEx: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      passwordConfirmFormEx: new FormControl(null)
    });
  }

  // These getters provides easy access to the fields
  get documentFormEx() { return this.validateForm.get('documentFormEx'); }
  get nameFormEx() { return this.validateForm.get('nameFormEx'); }
  get surnameFormEx() { return this.validateForm.get('surnameFormEx'); }
  get passwordFormEx() { return this.validateForm.get('passwordFormEx'); }
  get passwordConfirmFormEx() { return this.validateForm.get('passwordConfirmFormEx'); }

  // A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
  ngOnInit() {
    this.loadUsers();
    this.passwordConfirmFormEx.setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(16), this.equalsPassword.bind(this)]);
  }

  // A lifecycle hook that is called after Angular has fully initialized a component's view.
  ngAfterViewInit() {
    // Definition the pagination using instance MdbTablePaginationComponent
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(7);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  // Event of user create - The submit event is emitted by the form tag using the native DOM event
  onSubmit() {
    if (this.validateForm.invalid) { return; }
    this.loading = true;
    // Create user object for send post
    const user = new User(
      this.validateForm.value.documentFormEx,
      this.validateForm.value.nameFormEx,
      this.validateForm.value.surnameFormEx,
      this.validateForm.value.passwordFormEx
    );
    // User service for sending post request
    this.userService.postUser(user).subscribe(() => {
      this.loading = false;
      this.loadUsers();
      this.clearForm();
      // @ts-ignore - Generate alert of create user complete
      swal({ title: 'Registro completo', text: 'Ahora este usuario tiene acceso al vivero.', icon: 'success', buttons: false, timer: 2400 });
    }, (err) => {
      // @ts-ignore - Generate alert of create user failed
      swal({ title: 'Registro fallido.', text: 'Hubo un error al registrar el usuario.', icon: 'error', buttons: false, timer: 2400 });
    });
  }

  // Redirect for update a user using his document
  updateUser(user: User) {
    this.router.navigate(['/edituser', user._id]);
  }

  // Event of user delete - This function delete a user using his document, also has confirmation alerts to remove user
  deleteUser(user: User) {
    if (user.CC === this.userService.user.CC) {
      // @ts-ignore - Generate alert of delete invalid, you can not erase yourself
      swal('No se puede eliminar este usuario', 'Inválido borrarse a sí mismo.', 'warning', { buttons: false, timer: 2000 });
      return;
    }
    // @ts-ignore - Generate alert if confirm delete user
    swal({
      title: '¿Está seguro?',
      text: `Eliminará al usuario ${user.nombre}`,
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        // User service for sending delete request
        this.userService.deleteUser(user._id).subscribe(response => {
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
        // @ts-ignore - Generate alert if canceled delete user
        swal('El usuario sigue siendo seguro', {
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

  // Load users function
  loadUsers() {
    this.loading = true;
    this.message = 'Cargando...'
    // User service for sending get request
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      this.tableService.setDataSource(this.users);
      this.users = this.tableService.getDataSource();
      this.previous = this.tableService.getDataSource();
      this.loading = false;
    }, (err) => {
      this.message = err.error.message ? 'Datos incorrectos' : 'Hubo un error al cargar los usuarios'
    });
  }

  // Validation of passwords equals
  equalsPassword(control: AbstractControl) {
    const fieldOne = control.value;
    const fieldTwo = this.passwordFormEx.value;
    if (fieldOne === fieldTwo) {
      return null;
    }
    return { equals: true };
  }

  // Clean function, to clear fields
  clearForm() {
    this.validateForm.reset();
  }

  // Next function, to see more results - Pagination
  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  // Previous function, to see results previous
  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

}
