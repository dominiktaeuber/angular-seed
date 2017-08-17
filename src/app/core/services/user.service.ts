import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import {HttpService} from './http.service';
import {HttpResponse} from '../models/http-response.model';
import {User} from '../models/user.model';

@Injectable()
export class UserService {

	constructor(private httpService: HttpService) {
	}

	/**
	 * Uses the HttpService to get some dummy data from an open json api
	 *
	 * @returns {Observable<Comment[]>}
	 */
	public findUsers(): Observable<User[]> {

		return this.httpService.get('/users/find').map((response: HttpResponse) => {

			const users = [];

			_.each(response.data, (item) => {
				users.push(new User(item));
			});

			return users;
		});
	}

	public createUser(userData): Observable<any> {
		return this.httpService.post('/users/create', userData);
	}
}
