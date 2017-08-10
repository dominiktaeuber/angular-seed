import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {appRoutes} from './routes/app.routes';
import {SampleGuard} from './guards/sample.guard';

// Import Routes

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
