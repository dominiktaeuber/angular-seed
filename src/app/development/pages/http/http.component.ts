import {Component} from '@angular/core';

import {CommentService} from '../../../core/services/comment.service';
import {Comment} from '../../../core/models/comment.model';

@Component({
	selector: 'app-http',
	templateUrl: './http.component.html',
	styleUrls: ['./http.component.scss']
})
export class HttpComponent {

	protected comments: Comment[];

	constructor(private commentService: CommentService) {
	}

	protected getComments() {
		this.commentService.getComments().subscribe(data => {
			this.comments = data;
		});
	}
}
