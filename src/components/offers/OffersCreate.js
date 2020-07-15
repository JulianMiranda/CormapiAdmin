import React from 'react';
import {Create, SimpleForm, TextInput, ImageInput, ImageField, required} from 'react-admin';

const OffersCreate = (props) => {
	return (
		<Create {...props} title="Crear Oferta">
			<SimpleForm redirect="list">
				<TextInput source="name" validate={required()} />
				<ImageInput
					source="image"
					resource="offers"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};
export default OffersCreate;
