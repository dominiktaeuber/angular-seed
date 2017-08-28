import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {authRouting} from './auth.routes';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './pages/login/login.component';

@NgModule({
	imports: [
		SharedModule,
		authRouting
	],
	exports: [],
	declarations: [
		AuthComponent,
		LoginComponent
	],
	providers: []
})
export class AuthModule {
}
