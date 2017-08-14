import {RouterModule, Routes} from '@angular/router';

import {NotificationsComponent} from './pages/notifications/notifications.component';
import {DevelopmentComponent} from './development.component';

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
				component: NotificationsComponent
			}
		]
	}
];

export const developmentRouting = RouterModule.forChild(developmentRoutes);
