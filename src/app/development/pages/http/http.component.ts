import {Component, OnInit} from '@angular/core';

import {User} from '../../../core/models/user.model';
import {UserService} from '../../../core/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
	selector: 'app-http',
	templateUrl: './http.component.html',
	styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

	protected users: User[];
	protected userForm: FormGroup;

	constructor(private userService: UserService, private formBuilder: FormBuilder, private notificationService: NotificationService) {
	}

	ngOnInit() {
		this.userForm = this.formBuilder.group({
			'firstName': ['', Validators.required],
			'lastName': ['', Validators.required]
		});
	}

	protected findUsers() {
		this.userService.findUsers().subscribe(data => {
			this.users = data;
		});
	}

	protected createUser() {
		if (this.userForm.valid) {

			this.userService.createUser(this.userForm.value).subscribe(data => {
				console.log(data);
			});

		} else {
			this.notificationService.showNotification({
				header: 'Invalid Form!',
				body: 'Please revisit your information.',
				type: 'danger'
			});
		}
	}
}
