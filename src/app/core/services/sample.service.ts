import {Injectable} from '@angular/core';

@Injectable()
export class SampleService {

	public sampleItemValue: string;

	constructor() {
	}

	public static setSampleItem() {
		localStorage.setItem('sample', 'data');
	}

	public getSampleItem(): string {
		this.sampleItemValue = localStorage.getItem('sample');
		return this.sampleItemValue;
	}

}
