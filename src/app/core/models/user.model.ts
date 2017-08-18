import * as _ from 'lodash';

export class User {

	public id: string = null;
	public firstName: string = null;
	public lastName: string = null;
	public userName: string = null;
	public email: string = null;

	public createdAt: string = null;
	public updatedAt: string = null;

	constructor(properties: any = {}) {

		_.each(properties, (value, key) => {

			if (this.hasOwnProperty(key)) {
				this[key] = value;
			}
		});
	}
}
