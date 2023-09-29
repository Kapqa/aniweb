import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { stores } from '../../stores';
import Loader from '../atoms/Loader';
import AnimePreview from '../molecules/AnimePreview';

const AnimeList = observer(function AnimeListComponent() {
	const [seriesStore] = useState(() => stores.seriesStore);

	useEffect(() => {
		if (!seriesStore.series.length) {
			seriesStore.getAllSeries();
		}
	}, []);

	return (
		<div className="flex gap-6 flex-wrap mt-10">
			{!seriesStore.series.length && seriesStore.isLoading && <Loader size="xl" />}

			{seriesStore.series.map((anime) => (
				<AnimePreview
					key={anime.series_id}
					id={anime.series_id}
					score={anime.series_average_score}
					name={anime.series_name}
					year={anime.series_year}
					preview={anime.series_preview}
					seriesCount={anime.series_count}
				/>
			))}
		</div>
	);
});

export default AnimeList;
