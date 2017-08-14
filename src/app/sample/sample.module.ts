import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SamplePageComponent} from './pages/sample-page/sample-page.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [
		SamplePageComponent
	],
	exports: []
})

export class SampleModule {
}
