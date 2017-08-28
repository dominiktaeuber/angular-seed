import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {NotificationComponent} from './components/notification/notification.component';
import {NotificationService} from '../core/services/notification.service';
import {AuthenticatedGuard} from './guards/authenticated.guard';
import {NotAuthenticatedGuard} from './guards/not-authenticated.guard';


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
		NotificationService,
		AuthenticatedGuard,
		NotAuthenticatedGuard
	],
	declarations: [
		NotificationComponent
	]
})
export class SharedModule {
}
