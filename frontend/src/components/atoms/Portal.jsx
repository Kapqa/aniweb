import { useEffect, useState } from 'react';
import reactDOM from 'react-dom';

export const Portal = ({ children }) => {
	const [container] = useState(() => document.createElement('div'));

	useEffect(() => {
		document.body.appendChild(container);

		return () => {
			document.body.removeChild(container);
		};
	}, [container]);

	return reactDOM.createPortal(children, container);
};
