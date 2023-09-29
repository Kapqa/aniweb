import Layout from '../../components/atoms/Layout';
import AnimeCard from '../../components/organism/AnimeCard';
import Header from '../../components/organism/Header';

export default function AnimeComponent() {
	return (
		<Layout>
			<Header />

			<main className="py-10 px-5">
				<AnimeCard />
			</main>
		</Layout>
	);
}
