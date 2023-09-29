import clsx from 'clsx';

import Loader from './Loader';

export default function Button({
	onClick,
	children,
	variant = 'primary',
	showLoader = false,
	disabled = false,
}) {
	return (
		<button
			className={clsx({
				'py-1 px-5 rounded-lg text-white relative transition-all': true,
				'opacity-90 hover:opacity-100': !disabled && !showLoader,
				'opacity-80': disabled || showLoader,
				'bg-violet-600': variant === 'primary',
				'bg-gray-950': variant === 'secodary',
			})}
			disabled={showLoader || disabled}
			onClick={(ev) => {
				ev.preventDefault();
				ev.stopPropagation();
				onClick(ev);
			}}
		>
			<span
				className={clsx({
					'pointer-events-none': true,
					'opacity-100': !showLoader,
					'opacity-0': showLoader,
				})}
			>
				{children}
			</span>
			{showLoader && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6">
					<Loader />
				</div>
			)}
		</button>
	);
}
