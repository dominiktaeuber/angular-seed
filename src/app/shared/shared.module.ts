import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotificationComponent} from './components/notification/notification.component';
import {NotificationService} from '../core/services/notification.service';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
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
