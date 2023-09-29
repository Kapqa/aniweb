import { memo } from 'react';

import { useOutsideClick } from '../../hooks/useOutsideClick';

export const Popup = memo(function PopupComponent({ children, isOpen = true, onClose }) {
	const ref = useOutsideClick(onClose);

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed left-0 right-0 top-0 bottom-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
			<div
				ref={ref}
				className="min-w-[380px] rounded-3xl flex items-center text-center p-10 bg-zinc-800 flex-col"
			>
				{children}
			</div>
		</div>
	);
});
