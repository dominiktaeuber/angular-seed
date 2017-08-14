/**
 * Is used as a play- and testing-ground.
 */

import {NgModule} from '@angular/core';

import {SamplePageComponent} from './pages/sample-page/sample-page.component';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './components/header/header.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
	imports: [
		MaterialModule,
		SharedModule
	],
	declarations: [
		SamplePageComponent,
		HeaderComponent
	]
})
export class SampleModule {
}
