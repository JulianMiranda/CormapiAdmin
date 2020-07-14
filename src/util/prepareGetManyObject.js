export const PrepareGetManyObject = async (resource, params) => {
	if (resource === 'users') return await user();
	if (resource === 'categories') return await common();
	return {};
};

const user = () => {
	const population = [{path: 'image', fields: {url: true, status: true}}];

	const query = {
		population: population,
		/* getAll: 'true', */
	};

	return query;
};
const common = () => {
	const query = {
		getAll: 'true',
	};

	return query;
};
