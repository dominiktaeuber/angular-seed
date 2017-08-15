import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {NotificationComponent} from './components/notification/notification.component';
import {NotificationService} from '../core/services/notification.service';
import {MaterialModule} from '../material/material.module';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MaterialModule
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		NotificationComponent
	],
	providers: [
		NotificationService
	],
	declarations: [
		NotificationComponent
	]
})
export class SharedModule {
}
