import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {NotificationService} from '../../../core/services/notification.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

interface NotificationConfig {
	header: string;
	body: string;
	type: string;
	state?: string;
}

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss'],
	animations: [
		trigger('flyInOut', [
			state('in', style({transform: 'translateX(0)'})),
			transition('void => *', [
				style({transform: 'translateX(100%)'}),
				animate(200)
			]),
			transition('* => void', [
				animate(200, style({transform: 'translateX(100%)'}))
			])
		])
	]
})
export class NotificationComponent implements OnInit {

	public configSubscription: Subscription;
	public notificationQueue: NotificationConfig[] = [];

	constructor(private notificationService: NotificationService) {
	}

	ngOnInit() {
		this.configSubscription = this.notificationService.notificationConfig.subscribe((config: NotificationConfig) => {
			this.appendNotification(config);
		});
	}

	private appendNotification(config: NotificationConfig) {

		config.state = 'in';
		this.notificationQueue.push(config);
		const index: number = this.notificationQueue.indexOf(config);

		this.removeNotification(index);
	}

	private removeNotification(index: number) {
		setTimeout(() => {
			this.notificationQueue.splice(index, 1);
		}, 3000);
	}
}
