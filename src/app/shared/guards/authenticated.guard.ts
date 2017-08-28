import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {SessionService} from '../../core/services/session.service';


@Injectable()
export class AuthenticatedGuard implements CanActivate {

	constructor(private sessionService: SessionService, private router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot) {

		const user = this.sessionService.currentUser;
		const jwt = this.sessionService.jwt;

		if (user && user.id && jwt) {
			return true;
		}

		this.router.navigate(['auth']).catch((err) => {
			console.log('router.navigate error', err);
		});

		return false;
	}
}
