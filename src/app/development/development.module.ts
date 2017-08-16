import {NgModule} from '@angular/core';

import {DevelopmentComponent} from './development.component';
import {developmentRouting} from './development.routes';
import {NotificationsComponent} from './pages/notifications/notifications.component';
import {HeaderComponent} from './components/header/header.component';
import {SharedModule} from '../shared/shared.module';
import {HttpComponent} from './pages/http/http.component';

@NgModule({
	imports: [
		SharedModule,
		developmentRouting
	],
	exports: [],
	declarations: [
		DevelopmentComponent,
		HeaderComponent,
		NotificationsComponent,
		HttpComponent
	],
	providers: []
})
export class DevelopmentModule {
}
