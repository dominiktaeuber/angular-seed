import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {Subscription} from 'rxjs/Subscription';

import {HttpService} from '../../../core/services/http.service';

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
	public routeParams: any;

	////
	// Constructor
	////

	constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) {
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
	}

	////
	// Methods
	////

	/**
	 * Calls the httpService to issue a GET-Request
	 */
	protected getComments() {

		this.httpService.get('/comments').subscribe(result => {
			console.log('result', result);
		}, error => {
			console.log('error', error);
		});
	}
}
