import { SeriesStore } from './SeriesStore';
import { UserStore } from './UserStore';

export const stores = {
	userStore: new UserStore(),
	seriesStore: new SeriesStore(),
};
