import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {Subscription} from 'rxjs/Subscription';

import {CommentService} from '../../../core/services/comment.service';
import {Comment} from '../../../core/models/comment.model';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
	selector: 'app-sample-page',
	templateUrl: './sample-page.component.html',
	styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit, OnDestroy {

	////
	// Class Properties
	////

	private routeParamsSubscription: Subscription;
	private commentSubscription: Subscription;

	public routeParams: any;
	public comments: Comment[];

	////
	// Constructor
	////

	constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService, private notificationService: NotificationService) {
	}

	////
	// Lifecycle hooks
	////

	ngOnInit() {
		this.routeParamsSubscription = this.activatedRoute.params.subscribe( params => {

			if (!_.isEmpty(params)) {
				this.routeParams = params;
			}
		});
	}

	ngOnDestroy() {
		this.routeParamsSubscription.unsubscribe();
		this.commentSubscription.unsubscribe();
	}

	////
	// Methods
	////

	/**
	 * Uses the CommentService to get a set of comments
	 */
	protected getComments(): void {

		this.commentSubscription = this.commentService.getComments().subscribe((comments: Comment[]) => {
			this.comments = comments;
		});
	}

	protected publishNewInformation() {
		this.notificationService.publishNewInformation(123);
	}
}
