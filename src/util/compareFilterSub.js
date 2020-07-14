export const compareFilterSub = async (filter) => {
	const a = Object.keys(filter);
	if (JSON.stringify(filter) === '{}') return null;
	else if (a[0] === 'category') {
		const object = {
			category: ['=', `${filter.category}`],
		};
		return object;
	} else if (a[0] === 'provider') {
		const object = {
			provider: ['=', `${filter.provider}`],
		};
		return object;
	}
};
