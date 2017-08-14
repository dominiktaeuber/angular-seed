/**
 * Contains and manages routing related tasks.
 * E.g.: Specifies route definitions and provides guards for organized route access.
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {appRoutes} from './routes/app.routes';
import {SampleGuard} from './guards/sample.guard';

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [

		// Eliminate import of RouterModule in app.module
		RouterModule
	],
	providers: [

		// Guards
		SampleGuard
	],
	declarations: []
})
export class RoutingModule {
}
