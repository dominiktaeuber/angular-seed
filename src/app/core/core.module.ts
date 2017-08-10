import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleService} from './services/sample.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	providers: [

		// Singleton services
		SampleService
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
