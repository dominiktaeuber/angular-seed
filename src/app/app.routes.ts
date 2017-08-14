import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [

	// Standard page
	{
		path: '',
		redirectTo: 'development',
		pathMatch: 'full'
	},
	{
		path: 'development',
		loadChildren: 'app/development/development.module#DevelopmentModule'
	}
];

export const appRouting = RouterModule.forRoot(appRoutes);
