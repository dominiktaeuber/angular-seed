import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {User} from '../models/user.model';
import {HttpService} from './http.service';


@Injectable()
export class SessionService {

	private _currentUser: User = null;
	private _jwt: string = null;

	constructor(private httpService: HttpService, private router: Router) {
	}

	public login(loginData): Observable<User> {

		return this.httpService.post('/users/login', loginData).map((response) =>{
			this.currentUser = new User(response.data);
			this.jwt = response.data['jwt'];

			return this.currentUser;
		}, (err) => {
			console.log('login error', err);
		});
	}

	public logout() {
		localStorage.clear();
		this._currentUser = null;
		this._jwt = null;

		this.router.navigate(['auth']).catch((err) => {
			console.log('router.navigat error', err);
		});
	}

	public get currentUser(): User {
		if (!this._currentUser) {
			this._currentUser = new User(JSON.parse(localStorage.getItem('currentUser')));
		}

		return this._currentUser;
	}

	public set currentUser(user) {
		localStorage.setItem('currentUser', JSON.stringify(user));
		this._currentUser = user;
	}

	public get jwt(): string {
		if (!this._jwt) {
			this._jwt = localStorage.getItem('jwt');
		}

		return this._jwt;
	}

	public set jwt(jwt) {
		localStorage.setItem('jwt', jwt);
		this._jwt = jwt;
	}
}
