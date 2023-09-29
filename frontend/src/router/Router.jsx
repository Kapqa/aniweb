import { Route, Routes } from 'react-router-dom';

import { RoutePaths } from '../constants/RoutePaths';
import Anime from '../pages/Anime/Anime';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';

export default function Router() {
	return (
		<Routes>
			<Route path={RoutePaths.Home} element={<Home />} />
			<Route path={RoutePaths.Anime + RoutePaths._id} element={<Anime />} />
			<Route path={RoutePaths.Profile} element={<Profile />} />
		</Routes>
	);
}
