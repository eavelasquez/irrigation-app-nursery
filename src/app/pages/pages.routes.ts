import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginGuard } from '../services/service.index';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'home', component: HomeComponent, data: { title: 'Inicio' } },
      { path: 'adduser', component: AddUserComponent, data: { title: 'Agregar usuario' } },
      { path: 'edituser/:CC', component: EditUserComponent, data: { title: 'Editar usuario' } },
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
