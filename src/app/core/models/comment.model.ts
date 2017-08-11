import * as _ from 'lodash';

export class Comment {

	public body: string = null;
	public email: string = null;
	public id: number = null;
	public name: string = null;

	constructor(properties: any = {}) {

		_.each(properties, (value, key) => {

			if (this.hasOwnProperty(key)) {
				this[key] = value;
			}
		});
	}
}
