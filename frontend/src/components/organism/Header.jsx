import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthForm from './AuthForm';

import { RoutePaths } from '../../constants/RoutePaths';
import { stores } from '../../stores';
import Button from '../atoms/Button';
import { Popup } from '../atoms/Popup';
import { Portal } from '../atoms/Portal';

const Header = observer(() => {
	const [userStore] = useState(() => stores.userStore);
	const [isOpenPopup, setOpenPopup] = useState(false);

	return (
		<>
			<header className="w-full bg-zinc-800 h-16 flex justify-between items-center px-5">
				<Link className="text-xl" to={RoutePaths.Home}>
					Курсовая работа{' '}
					<span data-gradient className="font-bold">
						ANIWEB
					</span>
				</Link>

				{userStore.isAuthorized && <Link to={RoutePaths.Profile}>Профиль</Link>}
				{!userStore.isAuthorized && (
					<Button onClick={() => setOpenPopup(true)}>Войти</Button>
				)}
				{userStore.isAuthorized && (
					<Button onClick={() => userStore.logout()}>Выйти</Button>
				)}
			</header>

			{isOpenPopup && (
				<Portal>
					<Popup onClose={() => setOpenPopup(false)}>
						<AuthForm />
					</Popup>
				</Portal>
			)}
		</>
	);
});

export default Header;
