import Layout from '../../components/atoms/Layout';
import AnimeList from '../../components/organism/AnimeList';
import Header from '../../components/organism/Header';

export default function Home() {
	return (
		<Layout>
			<Header />

			<main className="py-10 px-5 flex flex-col gap-8">
				<div className="text-center text-2xl text-zinc-300">Смотреть аниме онлайн</div>
				<div className="text-base text-zinc-300">
					Аниме — не просто детские мультфильмы, а нечто большее. Это разновидность
					художественной анимации, которую нравится смотреть онлайн людям самого разного
					возраста — от малышей до бабушек и дедушек. А особенно круто, когда все эти
					анимешки на русском языке, все серии мультфильмов идут подряд и доступны
					совершенно бесплатно. Некоторые, правда, по ошибке продолжают причислять эти
					произведения искусства к «мультикам». Хотя по сложности сюжета, глубине
					персонажей они часто превосходят привычные фильмы, снятые на плёнку.
				</div>

				<AnimeList />
			</main>
		</Layout>
	);
}
