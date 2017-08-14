import {NgModule} from '@angular/core';

import {DevelopmentComponent} from './development.component';
import {developmentRouting} from './development.routes';
import {NotificationsComponent} from './pages/notifications/notifications.component';

@NgModule({
	imports: [
		developmentRouting
	],
	exports: [],
	declarations: [
		DevelopmentComponent,
		NotificationsComponent
	],
	providers: []
})
export class DevelopmentModule {
}
