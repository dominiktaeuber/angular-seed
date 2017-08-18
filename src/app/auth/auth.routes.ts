import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';


const authRoutes: Routes = [
	{
		path: '',
		component: AuthComponent
	}
];

export const authRouting = RouterModule.forChild(authRoutes);
