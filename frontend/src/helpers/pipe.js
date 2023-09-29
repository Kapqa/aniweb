function identity(x) {
	return x;
}

export function pipe(...fns) {
	if (!fns[0]) {
		return identity;
	}

	if (fns.length === 1) {
		return fns[0];
	}

	return function pipeline(value) {
		let result = value;

		for (let i = 0; i < fns.length; i++) {
			const next = fns[i];
			result = next(result);
		}

		return result;
	};
}
