import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {SampleModule} from './sample/sample.module';
import {RoutingModule} from './routing/routing.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,

		CoreModule,
		SharedModule,
		RoutingModule,
		SampleModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {
}
