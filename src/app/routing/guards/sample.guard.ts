import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {SampleService} from '../../core/services/sample.service'

@Injectable()
export class SampleGuard implements CanActivate {

	constructor(private sampleService: SampleService) {
	}

	canActivate() {

		return (this.sampleService.getSampleItem() === 'data');
	}
}
