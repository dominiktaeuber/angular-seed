import {Component} from '@angular/core';
import {SampleService} from './core/services/sample.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor() {
		SampleService.setSampleItem();
	}
}
