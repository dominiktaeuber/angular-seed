/**
 * Provides all the core functionality for the application.
 * E.g.: Singleton Services and Modules which are only imported once.
 */

import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import {HttpService} from './services/http.service';
import {UserService} from './services/user.service';
import {SessionService} from './services/session.service';

@NgModule({
	imports: [
		ReactiveFormsModule,
		BrowserAnimationsModule,
		HttpModule
	],
	exports: [

		// Export core modules
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	providers: [

		// Singleton services
		HttpService,
		SessionService,
		UserService
	]
})
export class CoreModule {
}
