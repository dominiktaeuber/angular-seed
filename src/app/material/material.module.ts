/**
 * Contains and bundles the Angular Material Modules and Components for easier management and providing to other modules.
 */

import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdToolbarModule} from '@angular/material'

@NgModule({
	imports: [
		BrowserAnimationsModule,

		MdToolbarModule
	],
	exports: [
		BrowserAnimationsModule,

		MdToolbarModule
	]
})
export class MaterialModule {
}
