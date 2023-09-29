import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

import { stores } from '../../stores';
import Loader from '../atoms/Loader';
import AnimePreview from '../molecules/AnimePreview';
import AnimeTable from '../molecules/AnimeTable/AnimeTable';
import CharacterCard from '../molecules/CharacterCard/CharacterCard';

const AnimeCard = observer(function AnimeCardComponent() {
	const { id } = useParams();
	const [seriesStore] = useState(() => stores.seriesStore);
	const [anime, setAnime] = useState(null);

	const request = useCallback(async (seriesId) => {
		const res = await seriesStore.getAnimeBySeriesId(seriesId);
		if (res) setAnime(res);
	}, []);

	useEffect(() => {
		request(id);
	}, [id]);

	if (!anime) {
		return <Loader size="xl" />;
	}

	return (
		<div className="bg-zinc-800 p-5 flex flex-col gap-8">
			<div className="flex gap-5">
				<AnimePreview
					isLink={false}
					id={anime.series_id}
					preview={anime.series_preview}
					seriesCount={anime.series_count}
				/>

				<div className="w-full flex flex-col gap-5">
					<h1 className="p-0 m-0 text-3xl">{anime.series_name}</h1>

					<AnimeTable
						year={anime.series_year}
						authors={anime.wiki_authors}
						score={anime.series_average_score}
						views={anime.series_views}
						country={anime.series_country}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-3 p-5 bg-zinc-900">
				<h2 className="text-xl font-bold">
					<span data-gradient>Описание</span> мультсериала:
				</h2>

				<span>{anime.series_description}</span>
			</div>

			<div className="w-full h-[600px]">
				<ReactPlayer url={anime.series_link} width="100%" height="100%" />
			</div>

			{!!anime.wiki_description && (
				<div className="flex flex-col gap-3 p-5 bg-zinc-900">
					<h2 className="text-xl font-bold">
						<span data-gradient>WIKI</span> Описание:
					</h2>

					<span>{anime.wiki_description}</span>
				</div>
			)}

			{!!anime.wiki_history && (
				<div className="flex flex-col gap-3 p-5 bg-zinc-900">
					<h2 className="text-xl font-bold">
						<span data-gradient>WIKI</span> История:
					</h2>

					<span>{anime.wiki_history}</span>
				</div>
			)}

			{!!anime.characters.length && (
				<div className="flex flex-col gap-3 p-5 bg-zinc-900">
					<h2 className="text-xl font-bold">
						<span data-gradient>WIKI</span> Персонажи:
					</h2>

					<div className="flex flex-wrap gap-5">
						{anime.characters.map((char) => (
							<CharacterCard
								key={char.name}
								name={char.name}
								description={char.description}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
});

export default AnimeCard;
