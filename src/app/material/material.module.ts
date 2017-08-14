/**
 * Contains and bundles the Angular Material Modules and Components for easier management and providing to other modules.
 */

import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdToolbarModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

@NgModule({
	imports: [
		BrowserAnimationsModule,

		MdToolbarModule,
		MdButtonModule
	],
	exports: [
		BrowserAnimationsModule,

		MdToolbarModule,
		MdButtonModule
	]
})
export class MaterialModule {
}
