import './animeTabe.css';

export default function AnimeTable({ year, authors, score, views, country }) {
	return (
		<table className="w-full">
			<tbody className="anime-table__body">
				{!!year && (
					<tr>
						<th className="text-zinc-400 whitespace-nowrap">Год выхода:</th>
						<th className="text-zinc-300 w-full whitespace-nowrap">{year}</th>
					</tr>
				)}

				{!!authors && (
					<tr>
						<th className="text-zinc-400 whitespace-nowrap">Режиссер:</th>
						<th className="text-zinc-300 w-full whitespace-nowrap">{authors}</th>
					</tr>
				)}

				{!!score && (
					<tr>
						<th className="text-zinc-400 whitespace-nowrap">Рейтинг аниме:</th>
						<th className="text-zinc-300 w-full whitespace-nowrap">{score} / 10</th>
					</tr>
				)}

				{typeof views === 'number' && (
					<tr>
						<th className="text-zinc-400 whitespace-nowrap">Просмотров:</th>
						<th className="text-zinc-300 w-full whitespace-nowrap">{views}</th>
					</tr>
				)}

				{!!country && (
					<tr>
						<th className="text-zinc-400 whitespace-nowrap">Страна:</th>
						<th className="text-zinc-300 w-full whitespace-nowrap">{country}</th>
					</tr>
				)}
			</tbody>
		</table>
	);
}

// const test = {
// 	series_average_score: 8,
// 	series_count: 387,
// 	series_country: 'japan',
// 	series_description: 'eshe krutoe',
// 	series_id: 2,
// 	series_name: 'bleach',
// 	series_preview: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA',
// 	series_views: 0,
// 	series_year: 2004,
// 	wiki_authors: 'kishimoto',
// 	wiki_description: 'eshe krutoe anime',
// 	wiki_history: 'ochen dolgo',
// 	characters: [
// 		{ name: 'ichigo', description: 'eshe krutoy' },
// 		{ name: 'aizen', description: 'eshe zloy' },
// 	],
// };
