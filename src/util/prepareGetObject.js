import {compareFilterSub} from './compareFilterSub';

export const PrepareGetObject = async (resource, params) => {
	if (resource === 'users') return await user(params);
	else if (resource === 'offers') return offers(params);
	else if (resource === 'promotions') return promotions(resource, params);

	return {};
};

const user = (params) => {
	const population = [{path: 'image', fields: {url: true, status: true}}];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: queryFilter,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population,
	};

	return query;
};

const promotions = async (resource, params) => {
	const population = [
		{
			path: 'image',
			filter: {status: true},
			fields: {
				url: true,
			},
		},
	];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const filterP = await compareFilterSub(queryFilter);

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: filterP,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population,
	};

	return query;
};

const offers = async (params) => {
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: queryFilter,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
	};

	if (JSON.stringify(query) === '{}') return null;

	return query;
};
