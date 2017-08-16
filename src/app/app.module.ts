/**
 * Functions as the root module and connects all the different modules of the application.
 * Bootstraps the Angular Application.
 */
import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {appRouting} from './app.routes';

@NgModule({
	imports: [
		CoreModule,
		appRouting
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
