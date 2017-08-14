/**
 * Provides all the core functionality for the application.
 * E.g.: Singleton Services and Modules which are only imported once.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {HttpService} from './services/http.service';
import {CommentService} from './services/comment.service';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		BrowserModule,
		HttpModule
	],
	exports: [

		// Export core modules
		CommonModule,
		ReactiveFormsModule
	],
	providers: [

		// Singleton services
		HttpService,
		CommentService
	]
})
export class CoreModule {
}
