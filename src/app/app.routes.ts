import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotPageFoundComponent } from './shared/not-page-found/not-page-found.component';
import { NotLoginGuard } from './services/service.index';

const routes: Routes = [
  { path: 'login', /* canActivate: [ NotLoginGuard ], */ component: LoginComponent },
  { path: '**', component: NotPageFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
