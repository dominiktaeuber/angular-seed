import {Injectable} from '@angular/core';
import {Http, URLSearchParams, RequestMethod, ResponseContentType, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class HttpService {

	////
	// Class Properties
	////

	private apiUrl: string;

	////
	// Constructor
	////

	constructor(private http: Http) {

		// URL fo testing purposes
		this.apiUrl = 'https://jsonplaceholder.typicode.com';
	}

	////
	// Methods
	////

	/**
	 * Creates a Http-Request based on the parameters
	 *
	 * @param {string} url - Route to call
	 * @param {RequestMethod} method - Http-Method
	 * @param {{}} data - Literal object containing key / value pairs
	 * @param {ResponseContentType} responseType - Type of the response e.g. JSON
	 * @returns {Observable<Response>} - Observable containing the response from the API
	 */
	private createHttpRequest(
		url: string, method: RequestMethod,
		data?: {},
		responseType: ResponseContentType = ResponseContentType.Json
	): Observable<Response> {

		// Prepare requestOptions
		const requestOptions: RequestOptions = new RequestOptions({
			method: method
		});

		// Process data if available
		if (data) {

			if (method === RequestMethod.Get) {
				const params: URLSearchParams = new URLSearchParams();

				_.each(data, (value, key) => {
					params.set(key, value);
				});

				requestOptions.params = params;
			}

			if (method === RequestMethod.Post) {
				requestOptions.body = JSON.stringify(data);
			}
		}

		// Set response type
		requestOptions.responseType = responseType;

		return this.http.request(this.apiUrl + url, requestOptions);
	}

	/**
	 * Creates a Http GET request
	 *
	 * @param {string} url - Route to call
	 * @param {{}} data - Literal object containing key / value pairs
	 * @param {ResponseContentType} responseType - Type of the response e.g. JSON
	 * @returns {Observable<Response>} - Observable containing the response from the API
	 */
	public get(url: string, data?: {}, responseType: ResponseContentType = ResponseContentType.Json): Observable<Response> {

		return this.createHttpRequest(url, RequestMethod.Get, data, responseType);
	}

	/**
	 * Creates a Http POST request
	 *
	 * @param {string} url - Route to call
	 * @param {{}} data - Literal object containing key / value pairs
	 * @param {ResponseContentType} responseType - Type of the response e.g. JSON
	 * @returns {Observable<Response>} - Observable containing the response from the API
	 */
	public post(url: string, data?: {}, responseType: ResponseContentType = ResponseContentType.Json): Observable<Response> {

		return this.createHttpRequest(url, RequestMethod.Post, data, responseType);
	}

	/**
	 * Creates a Http PUT request
	 *
	 * @param {string} url - Route to call
	 * @param {{}} data - Literal object containing key / value pairs
	 * @param {ResponseContentType} responseType - Type of the response e.g. JSON
	 * @returns {Observable<Response>} - Observable containing the response from the API
	 */
	public put(url: string, data?: {}, responseType: ResponseContentType = ResponseContentType.Json): Observable<Response> {

		return this.createHttpRequest(url, RequestMethod.Put, data, responseType);
	}

	/**
	 * Creates a Http DELETE request
	 *
	 * @param {string} url - Route to call
	 * @param {{}} data - Literal object containing key / value pairs
	 * @param {ResponseContentType} responseType - Type of the response e.g. JSON
	 * @returns {Observable<Response>} - Observable containing the response from the API
	 */
	public delete(url: string, data?: {}, responseType: ResponseContentType = ResponseContentType.Json): Observable<Response> {

		return this.createHttpRequest(url, RequestMethod.Delete, data, responseType);
	}
}
