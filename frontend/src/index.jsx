import { createRoot } from 'react-dom/client';

import { App } from './app/App';
import './index.css';

let container = document.getElementById('root');

if (!container) {
	container = document.createElement('div');
	container.classList.add('custom-root');
	document.body.appendChild(container);
}

createRoot(container).render(<App />);
