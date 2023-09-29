import React from 'react';

import withRouter from './providers/withRouter';

import { pipe } from '../helpers/Pipe';
import Router from '../router/Router';

function Application() {
	return (
		<React.Fragment>
			<Router />
		</React.Fragment>
	);
}

const withProviders = pipe(withRouter);
export const App = withProviders(Application);
