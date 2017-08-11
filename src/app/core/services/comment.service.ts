import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import {HttpService} from './http.service';
import {HttpResponse} from '../models/http-response.model';
import {Comment} from '../models/comment.model';

@Injectable()
export class CommentService {

	constructor(private httpService: HttpService) {
	}

	/**
	 * Uses the HttpService to get some dummy data from an open json api
	 *
	 * @returns {Observable<Comment[]>}
	 */
	public getComments(): Observable<Comment[]> {

		return this.httpService.get('/comments').map((response: HttpResponse) => {

			const comments = [];

			_.each(response.data, (item) => {
				comments.push(new Comment(item));
			});

			return comments;
		});
	}

}
