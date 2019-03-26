import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';
import {NotLoginGuard} from './services/service.index';

const routes: Routes = [
  { path: 'login', canActivate: [ NotLoginGuard ], component: LoginComponent },
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
