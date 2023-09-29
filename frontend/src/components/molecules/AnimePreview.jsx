import clsx from 'clsx';
import { Link } from 'react-router-dom';

import StarSvg from '../../assets/svg/star.svg';
import { RoutePaths } from '../../constants/RoutePaths';

export default function AnimePreview({
	score,
	name,
	year,
	seriesCount,
	preview,
	id,
	isLink = true,
}) {
	if (isLink) {
		return (
			<div className="flex flex-col gap-3">
				<Link
					to={`${RoutePaths.Anime}/${id}`}
					className={clsx({
						'relative block w-[173.3px] h-[260px] overflow-hidden': true,
						"before:content-'' before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-indigo-500/50 before:z-30 before:pointer-events-none before:opacity-0 hover:before:opacity-100 before:transition-all": true,
					})}
				>
					<img
						className="absolute z-10 w-full h-full top-0 left-0 object-cover"
						src={preview}
					/>

					<div className="relative z-20 flex justify-between">
						<div className="bg-lime-600/80 px-2 py-1 text-xs font-medium">
							{seriesCount} СЕРИЙ
						</div>

						{typeof score === 'number' && (
							<div className="bg-amber-400 px-2 py-1 text-xs font-medium text-black flex gap-1 items-center">
								<StarSvg className="w-[14px] h-[14px]" />
								{score}
							</div>
						)}
					</div>
				</Link>

				{(name || year) && (
					<div className="flex flex-col gap-1">
						{name && <div className="text-sm text-zinc-300">{name}</div>}
						{year && <div className="text-xs text-zinc-400">({year})</div>}
					</div>
				)}
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-3">
			<div
				className={clsx({
					'relative block w-[173.3px] h-[260px] overflow-hidden': true,
				})}
			>
				<img
					className="absolute z-10 w-full h-full top-0 left-0 object-cover"
					src={preview}
				/>

				<div className="relative z-20 flex justify-between">
					<div className="bg-lime-600/80 px-2 py-1 text-xs font-medium">
						{seriesCount} СЕРИЯ
					</div>

					{typeof score === 'number' && (
						<div className="bg-amber-400 px-2 py-1 text-xs font-medium text-black flex gap-1 items-center">
							<StarSvg className="w-[14px] h-[14px]" />
							{score}
						</div>
					)}
				</div>
			</div>

			{(name || year) && (
				<div className="flex flex-col gap-1">
					{name && <div className="text-sm text-zinc-300">{name}</div>}
					{year && <div className="text-xs text-zinc-400">({year})</div>}
				</div>
			)}
		</div>
	);
}
