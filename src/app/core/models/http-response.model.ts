export class HttpResponse {

	public status: number;
	public statusText: string;
	public data: any;

	constructor(status: number, statusText: string = null, data: any = null) {

		this.status = status;
		this.statusText = statusText;
		this.data = data;
	}
}
