import {RouterModule, Routes} from '@angular/router';

import {NotificationsComponent} from './pages/notifications/notifications.component';
import {DevelopmentComponent} from './development.component';
import {HttpComponent} from './pages/http/http.component';
import {AuthenticatedGuard} from '../shared/guards/authenticated.guard';

const developmentRoutes: Routes = [
	{
		path: '',
		component: DevelopmentComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'notifications'
			},
			{
				path: 'notifications',
				component: NotificationsComponent,
				canActivate: [AuthenticatedGuard]
			},
			{
				path: 'http',
				component: HttpComponent,
				canActivate: [AuthenticatedGuard]
			}
		]
	}
];

export const developmentRouting = RouterModule.forChild(developmentRoutes);
