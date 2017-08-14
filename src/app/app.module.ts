/**
 * Functions as the root module and connects all the different modules of the application.
 * Bootstraps the Angular Application.
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {appRouting} from './app.routes';

@NgModule({
	imports: [
		BrowserModule,

		appRouting,
		CoreModule
	],
	exports: [],
	providers: [],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {
}
