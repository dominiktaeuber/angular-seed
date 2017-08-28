import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {SessionService} from '../../core/services/session.service';


@Injectable()
export class NotAuthenticatedGuard implements CanActivate {

	constructor(private sessionService: SessionService, private router: Router) {
	}

	canActivate() {

		const user = this.sessionService.currentUser;
		const jwt = this.sessionService.jwt;

		if (!user.id && !jwt) {

			return true;
		}

		this.router.navigate(['development']).catch((err) => {
			console.log('router.navigate error', err);
		});

		return false;
	}
}
