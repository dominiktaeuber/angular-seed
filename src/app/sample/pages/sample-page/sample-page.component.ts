import {Component, OnDestroy, OnInit} from '@angular/core';
import {SampleService} from '../../../core/services/sample.service';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {Subscription} from 'rxjs/Subscription';

@Component({
	selector: 'app-sample-page',
	templateUrl: './sample-page.component.html',
	styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit, OnDestroy {

	private routeParamsSubscription: Subscription;
	public routeParams: any;
	public sampleItem: string;

	constructor(private sampleService: SampleService, private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {
		this.sampleItem = this.sampleService.getSampleItem();

		this.routeParamsSubscription = this.activatedRoute.params.subscribe( params => {

			if (!_.isEmpty(params)) {
				this.routeParams = params;
			}
		});
	}

	ngOnDestroy() {
		this.routeParamsSubscription.unsubscribe();
	}
}
