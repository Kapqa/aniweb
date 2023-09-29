import { makeAutoObservable } from 'mobx';

import { UserService } from '../services/UserService';

export class UserStore {
	name = '';
	isAuthorized = false;
	isLoading = false;

	constructor() {
		makeAutoObservable(this);
	}

	async login(login, password) {
		try {
			this.isLoading = true;
			const response = await UserService.login(login, password);
			
			if (response?.data) {
				this.isAuthorized = true;
				this.name = response.data.name;
				return true;
			}

			return false;
		} catch (err) {
			console.error('err:', err);
			return false;
		} finally {
			this.isLoading = false;
		}
	}

	async logout() {
		try {
			this.isLoading = true;
			await UserService.logout();
			this.isAuthorized = false;
			return true;
		} catch (err) {
			console.error('err:', err);
			return false;
		} finally {
			this.isLoading = false;
		}
	}

	async registration(name, login, password) {
		try {
			this.isLoading = true;
			await UserService.registration(name, login, password);
			return true;
		} catch (err) {
			console.error('err:', err);
			return false;
		} finally {
			this.isLoading = false;
		}
	}
}
