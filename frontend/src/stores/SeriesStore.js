import { makeAutoObservable } from 'mobx';

import { SeriesService } from '../services/SeriesService';

export class SeriesStore {
	isLoading = false;
	series = [];

	constructor() {
		makeAutoObservable(this);
	}

	async getAllSeries() {
		try {
			this.isLoading = true;
			const response = await SeriesService.getAllSeries();

			if (response.data) {
				this.series = response.data;
			}
		} catch (err) {
			console.error('err:', err);
		} finally {
			this.isLoading = false;
		}
	}

	async getAnimeBySeriesId(seriesId) {
		try {
			this.isLoading = true;
			const response = await SeriesService.getAnimeBySeriesId(seriesId);

			if (response.data) {
				return response.data;
			}
		} catch (err) {
			console.error('err:', err);
		} finally {
			this.isLoading = false;
		}
	}
}
