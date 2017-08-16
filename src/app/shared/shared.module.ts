import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {NotificationComponent} from './components/notification/notification.component';
import {NotificationService} from '../core/services/notification.service';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule
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
