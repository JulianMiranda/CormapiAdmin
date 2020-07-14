import {fetchUtils} from 'react-admin';
import {getHeaders} from '../util/api';
import {PrepareEditObject} from '../util/prepareEditObject';
import {PrepareGetObject} from '../util/prepareGetObject';
import {PrepareCreateObject} from '../util/prepareCreateObject';
import {PrepareGetManyObject} from '../util/prepareGetManyObject';

const apiUrl = process.env.REACT_APP_API_URL;
const httpClient = fetchUtils.fetchJson;

export default {
	getList: async (resource, params) => {
		const query = await PrepareGetObject(resource, params);
		const headers = await getHeaders();

		return httpClient(`${apiUrl}/${resource}/getList`, {
			method: 'POST',
			body: JSON.stringify(query),
			headers,
		}).then(({json}) => {
			return {
				data: json.data,
				total: json.count,
			};
		});
	},

	getOne: async (resource, params) => {
		const headers = await getHeaders();

		return httpClient(`${apiUrl}/${resource}/getOne/${params.id}`, {headers}).then(({json}) => ({
			data: json,
		}));
	},

	getMany: async (resource, params) => {
		const query = await PrepareGetManyObject(resource, params);

		const headers = await getHeaders();

		return httpClient(`${apiUrl}/${resource}/getList`, {
			method: 'POST',
			body: JSON.stringify(query),
			headers,
		}).then(({json}) => {
			return {
				data: json.data,
				total: json.count,
			};
		});
	},

	create: async (resource, params) => {
		const data = await PrepareCreateObject(resource, params);
		console.log(data, 'Dataaaaa');
		debugger;

		const headers = await getHeaders();

		return httpClient(`${apiUrl}/${resource}/create`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers,
		}).then(({json}) => {
			return {
				data: {...json, id: json._id},
			};
		});
	},

	update: async (resource, params) => {
		const data = await PrepareEditObject(resource, params);
		console.log(data, 'Data en el dataProvider');
		debugger;
		if (!data) return {data: {}};

		const headers = await getHeaders();
		return httpClient(`${apiUrl}/${resource}/update/${params.id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers,
		}).then(({json}) => ({data: json}));
	},

	delete: async (resource, params) => {
		const headers = await getHeaders();
		httpClient(`${apiUrl}/${resource}/delete/${params.id}`, {
			method: 'DELETE',
			headers,
		}).then(({json}) => ({data: json}));
	},
};
