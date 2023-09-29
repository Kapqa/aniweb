import { observer } from 'mobx-react-lite';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutePaths } from '../../constants/RoutePaths';
import { stores } from '../../stores';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const AuthForm = observer(function AuthFormComponent() {
	const navigate = useNavigate();
	const [isAuth, setAuth] = useState(true);
	const [userStore] = useState(() => stores.userStore);

	const clickHandler = useCallback(async () => {
		if (isAuth) {
			const isSuccess = await userStore.login(form.current.login, form.current.password);

			if (isSuccess) {
				navigate(RoutePaths.Profile);
			}

			return;
		}

		const isSuccess = await userStore.registration(form.current.name, form.current.login, form.current.password);

		if (isSuccess) {
			setAuth(true);
		}
	}, [isAuth]);

	const form = useRef({
		login: '',
		password: '',
		name: '',
	});

	return (
		<div className="flex flex-col gap-10 w-full">
			<h2 data-gradient className="text-3xl font-bold m-0 p-0">
				{isAuth ? 'Авторизация' : 'Регистрация'}
			</h2>

			<form className="flex flex-col gap-6">
				{!isAuth && (<Input
					type="text"
					label="Имя:"
					placholder="Имя"
					value={form.current.name}
					onChange={(value) => (form.current.name = value)}
				/>)}

				<Input
					maxLength={16}
					type="text"
					label="Логин:"
					placholder="Логин"
					value={form.current.login}
					onChange={(value) => (form.current.login = value)}
				/>

				<Input
					maxLength={16}
					label="Пароль:"
					placholder="Пароль"
					type="password"
					value={form.current.password}
					onChange={(value) => (form.current.password = value)}
				/>

				<div className="flex justify-between gap-4">
					<Button variant="secondary" onClick={() => setAuth((prev) => !prev)}>
						{isAuth ? 'Нет аккаунта?' : 'Есть аккаунт?'}
					</Button>

					<Button
						showLoader={userStore.isLoading}
						variant="primary"
						onClick={clickHandler}
					>
						{isAuth ? 'Логин' : 'Регистрация'}
					</Button>
				</div>
			</form>
		</div>
	);
});

export default AuthForm;
