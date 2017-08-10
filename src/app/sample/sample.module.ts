import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SamplePageComponent} from './pages/sample-page/sample-page.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SamplePageComponent
	],
	exports: []
})

export class SampleModule {
}
