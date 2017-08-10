import {SamplePageComponent} from '../../sample/pages/sample-page/sample-page.component';
import {SampleGuard} from '../guards/sample.guard';

export const appRoutes = [

	{path: '', redirectTo: '/sample', pathMatch: 'full'},

	{path: 'sample', component: SamplePageComponent, canActivate: [SampleGuard]},
	{path: 'sample/:id', component: SamplePageComponent, canActivate: [SampleGuard]},

	{path: '**', redirectTo: '/sample'}
];
