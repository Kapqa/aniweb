import clsx from 'clsx';

export default function Loader({ size = 'xs' }) {
	return (
		<div
			className={clsx({
				'inline-block animate-spin rounded-full  border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]': true,
				'h-4 w-4 border-2': size === 'xs',
				'h-6 w-6 border-3': size === 's',
				'h-8 w-8 border-4': size === 'l',
				'h-10 w-10 border-5': size === 'xl',
			})}
		></div>
	);
}
