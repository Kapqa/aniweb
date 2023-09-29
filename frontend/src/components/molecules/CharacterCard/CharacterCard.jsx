import './characterCard.css';

export default function CharacterCard({ name, description }) {
	return (
		<div className="w-[530px] bg-zinc-800 p-5">
			<table className="w-full">
				<tbody className="character-card__body">
					<tr>
						<th data-gradient className="whitespace-nowrap">
							Имя:
						</th>
						<th className="w-full text-zinc-400">{name}</th>
					</tr>

					<tr>
						<th data-gradient className="whitespace-nowrap">
							Описание:
						</th>
						<th className="w-full text-zinc-400">{description}</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
