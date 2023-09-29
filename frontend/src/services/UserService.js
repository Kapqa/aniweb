import { HttpClient } from './HttpClient';

class UserHttpService extends HttpClient {
	async login(login, password) {
		if (login && password) {
			const response = await this.request({
				method: 'login',
				login,
				password,
			});

			if (response?.data?.token) {
				localStorage.setItem('token', this.token);
				delete response.data.token;
				return response;
			} else {
				return null;
			}
		}
	}

	async logout() {
		const token = localStorage.getItem('token');

		await this.request({
			method: 'logout',
			token,
		});

		if (token) {
			localStorage.removeItem('token');
			return true;
		}
	}

	async registration(name, login, password) {
		return await this.request({
			method: 'registration',
			name,
			login,
			password,
		});
	}
}

export const UserService = new UserHttpService();
