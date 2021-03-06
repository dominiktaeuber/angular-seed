import {Component} from '@angular/core';
import {SessionService} from '../../../core/services/session.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	constructor(private sessionService: SessionService) {
	}

	public logout() {

		this.sessionService.logout();
	}
}
