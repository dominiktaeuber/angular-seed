/**
 * Functions as the root module and connects all the different modules of the application.
 * Bootstraps the Angular Application.
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SampleModule} from './sample/sample.module';
import {RoutingModule} from './routing/routing.module';
import {MaterialModule} from './material/material.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,

		CoreModule,
		RoutingModule,
		MaterialModule,
		SampleModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {
}
