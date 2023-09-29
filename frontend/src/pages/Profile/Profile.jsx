import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/atoms/Layout';
import Header from '../../components/organism/Header';
import { RoutePaths } from '../../constants/RoutePaths';
import { stores } from '../../stores';

const Profile = observer(function ProfileComponent() {
	const navigate = useNavigate();
	const [userStore] = useState(() => stores.userStore);

	useEffect(() => {
		if (!userStore.isAuthorized) {
			navigate(RoutePaths.Home);
		}
	}, [userStore.isAuthorized]);

	return (
		<Layout>
			<Header />

			<main className="py-10 px-5">
				<h1>Имя: {userStore.name}</h1>
			</main>
		</Layout>
	);
});

export default Profile;
