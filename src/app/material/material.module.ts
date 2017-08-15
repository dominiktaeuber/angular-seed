/**
 * Contains and bundles the Angular Material Modules and Components for easier management and providing to other modules.
 */

import {NgModule} from '@angular/core';

import {MdToolbarModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material'

@NgModule({
	imports: [
		MdToolbarModule,
		MdButtonModule,
		MdCardModule
	],
	exports: [
		MdToolbarModule,
		MdButtonModule,
		MdCardModule
	]
})
export class MaterialModule {
}
