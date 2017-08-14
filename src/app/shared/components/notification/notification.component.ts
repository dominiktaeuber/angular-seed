import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

	public showAlert = false;

	public value: any;

	public configSubscription: Subscription;

	constructor(private notificationService: NotificationService) {
	}

	ngOnInit() {

		this.configSubscription = this.notificationService.notificationConfig.subscribe(config => {
			this.value = config;
		});
	}
}
