import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback) => {
	const ref = useRef(null);

	useEffect(() => {
		const handleClick = ({ target }) => {
			if (target instanceof Node) {
				if (ref.current && !ref.current?.contains(target)) {
					callback();
				}
			}
		};

		document.addEventListener('click', handleClick, true);

		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	}, [callback]);

	return ref;
};
