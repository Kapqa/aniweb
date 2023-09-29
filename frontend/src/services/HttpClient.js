import axios from 'axios';

export class HttpClient {
	_protocol = 'http';
	_hostname = 'anime';
	_endpoint = 'backend/';

	get _url() {
		return `${this._protocol}://${this._hostname}/${this._endpoint}`;
	}

	async request(queryParams = {}) {
		const query = Object.entries(queryParams)
			.map(([key, value]) => `${key}=${value}`)
			.join('&');

		const res = await axios.get(`${this._url}?${query}`);
		return res.data;
	}
}
