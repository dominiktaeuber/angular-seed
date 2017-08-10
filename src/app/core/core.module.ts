import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {HttpService} from './services/http.service';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		BrowserModule,
		HttpModule
	],
	providers: [

		// Singleton services
		HttpService
	],
	exports: [

		// Export core modules
		CommonModule,
		ReactiveFormsModule
	],
	declarations: []
})

export class CoreModule {
}
