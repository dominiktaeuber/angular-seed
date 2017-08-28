import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {SessionService} from '../../../core/services/session.service';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public formGroup: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private sessionService: SessionService,
		private router: Router,
		private notificationService: NotificationService
	) {
	}

	ngOnInit() {

		this.formGroup = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	public onLogin() {

		this.sessionService.login(this.formGroup.value).subscribe((user) => {

			if (user && user.id) {
				this.router.navigate(['development']).catch(err => {
					console.log('router.navigate error', err);
				});
			}
		}, (err) => {
			this.notificationService.showNotification({
				header: 'Login Failed',
				body: 'Please check your supplied information',
				type: 'warn'
			});

			console.log('onLogin error', err);
		});
	}
}
