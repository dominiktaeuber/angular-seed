import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

interface NotificationConfig {

}

@Injectable()
export class NotificationService {

	public notificationConfig: Subject<any>;

	constructor() {

		this.notificationConfig = new Subject();
	}

	public showNotification(value) {

		this.notificationConfig.next(value);
	}
}
