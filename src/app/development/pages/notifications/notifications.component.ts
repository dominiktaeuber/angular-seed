import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

	public form: FormGroup;

	constructor(private formBuilder: FormBuilder, private notificationService: NotificationService) {
	}

	ngOnInit() {

		this.form = this.formBuilder.group({
			header: ['Custom Header', Validators.required],
			body: ['Longer Custom Body Text', Validators.required],
			type: ['success', Validators.required]
		});
	}

	public showNotification() {

		this.notificationService.showNotification(this.form.value);
	}
}
