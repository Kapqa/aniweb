import { HttpClient } from './HttpClient';

class SeriesHttpService extends HttpClient {
	async getAllSeries() {
		return await this.request({
			method: 'series',
		});
	}

	async getAnimeBySeriesId(seriesId) {
		return await this.request({
			method: 'anime',
			seriesId,
		});
	}
}

export const SeriesService = new SeriesHttpService();
