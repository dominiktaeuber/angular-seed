import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NotificationService implements OnInit {

	private defaultConfig = {
		type: 'success',
		timeout: 1500,
		title: 'Standard Title!',
		body: 'Standard Body!'
	};

	public notificationConfig: Subject<any>;

	constructor() {

		console.log('started ng on init');

		this.notificationConfig = new Subject();

		console.log('created subject', this.notificationConfig);

		this.notificationConfig.next(12);
	}

	ngOnInit() {


	}

	public publishNewInformation(value) {

		this.notificationConfig.next(value);
	}
}
