import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [

	// Standard page
	{
		path: '',
		redirectTo: 'auth',
		pathMatch: 'full'
	},
	{
		path: 'development',
		loadChildren: 'app/development/development.module#DevelopmentModule'
	},
	{
		path: 'auth',
		loadChildren: 'app/auth/auth.module#AuthModule'
	}
];

export const appRouting = RouterModule.forRoot(appRoutes);
