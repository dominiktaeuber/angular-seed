import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {authRouting} from './auth.routes';

@NgModule({
	imports: [
		SharedModule,
		authRouting
	],
	declarations: []
})
export class AuthModule {
}
