import { BrowserRouter } from 'react-router-dom';

export default function withRouter(Component) {
	return function RouterProvider(props) {
		return (
			<BrowserRouter>
				<Component {...props} />
			</BrowserRouter>
		);
	};
}
