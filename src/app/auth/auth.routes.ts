import {RouterModule, Routes} from '@angular/router';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './pages/login/login.component';
import {NotAuthenticatedGuard} from '../shared/guards/not-authenticated.guard';


const authRoutes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginComponent,
				canActivate: [NotAuthenticatedGuard]
			}
		]
	}
];

export const authRouting = RouterModule.forChild(authRoutes);
