import React from 'react';
import {Create, SimpleForm, TextInput, ImageInput, ImageField, required} from 'react-admin';

const CategoriesCreate = (props) => {
	return (
		<Create {...props} title="Crear Categoría">
			<SimpleForm redirect="list">
				<TextInput source="name" validate={required()} />
				<ImageInput
					source="image"
					resource="categories"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};
export default CategoriesCreate;
