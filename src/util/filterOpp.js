export const FilterOpp = async (filter) => {
	const a = Object.keys(filter);

	if (JSON.stringify(filter) === '{}') return null;
	if (a.length > 1) {
		if (a[1] === 'anounce') {
			const object = {
				state: ['=', `${filter.state}`],
				anounce: ['=', `${filter.anounce}`],
			};
			return object;
		} else if (a[1] === 'user') {
			const object = {
				state: ['=', `${filter.state}`],
				user: ['=', `${filter.user}`],
			};
			return object;
		} else if (a[1] === 'provider') {
			const object = {
				state: ['=', `${filter.state}`],
				provider: ['=', `${filter.provider}`],
			};
			return object;
		}
	} else if (a[0] === 'state') {
		const object = {
			state: ['=', `${filter.state}`],
		};
		return object;
	}
};
