import React from 'react';
import {List, Datagrid, TextField, EditButton, ReferenceField, SimpleList} from 'react-admin';
import {useMediaQuery} from '@material-ui/core';
import {CustomBoolean} from '../../common/fields/Boolean';
import {CustomDate} from '../../common/fields/Date';
import Filters from './Filter';

const SubOffersList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	return (
		<List
			{...props}
			title="SubOfertas"
			sort={{field: 'createdAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.name}
					secondaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
				/>
			) : (
				<Datagrid rowClick="show">
					<TextField label="Nombre" source="name" />
					<CustomBoolean label="Estado" source="status" />
					<ReferenceField label="Oferta" source="category" reference="offers">
						<TextField source="name" />
					</ReferenceField>
					<CustomDate label="Editado" source="updatedAt" />
					<EditButton label="Editar" />
				</Datagrid>
			)}
		</List>
	);
};
export default SubOffersList;
