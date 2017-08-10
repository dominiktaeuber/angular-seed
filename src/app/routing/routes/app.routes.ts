import {SamplePageComponent} from '../../sample/pages/sample-page/sample-page.component';
import {SampleGuard} from '../guards/sample.guard';

export const appRoutes = [

	// Standard page
	{path: '', redirectTo: '/sample', pathMatch: 'full'},

	{path: 'sample', component: SamplePageComponent, canActivate: [SampleGuard]},
	{path: 'sample/:id', component: SamplePageComponent, canActivate: [SampleGuard]},

	// No matching route found
	{path: '**', redirectTo: '/sample'}
];
