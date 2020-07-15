import {UploadImage} from '../firebase/uploadImage';

export const PrepareCreateObject = async (resource, params) => {
	if (resource === 'offers') return await offers(resource, params);
	else if (resource === 'suboffers') return suboffers(resource, params);

	return {};
};
const offers = async (resource, params) => {
	const object = {};
	object.name = params.data.name;
	const url = await UploadImage(resource, [params.data.image]);

	object.image = {url: url[0]};

	return object;
};
const suboffers = async (resource, params) => {
	const object = {};

	object.name = params.data.name;
	object.category = params.data.category;

	const url = await UploadImage(resource, [params.data.image]);
	object.image = {url: url[0]};

	return object;
};
