import React from 'react';
import {List, Datagrid, NumberField, EditButton, EmailField, TextField} from 'react-admin';
import {useMediaQuery} from '@material-ui/core';
import {Filters} from './Filters';
import {CustomBoolean} from '../../common/fields/Boolean';
import FullNameField from './FullNameField';
import UsersListMobile from './UsersListMobile';

const UsersList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	return (
		<List
			{...props}
			title="Usuarios"
			sort={{field: 'updatedAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			{isSmall ? (
				<UsersListMobile />
			) : (
				<Datagrid rowClick="show">
					<FullNameField label="Nombre" />
					<NumberField label="Teléfono" textAlign="center" source="phone" />
					<EmailField label="Correo" source="email" />
					<TextField label="Rol" source="role" />
					<CustomBoolean label="Estado" source="status" />
					<EditButton label="Editar" />
				</Datagrid>
			)}
		</List>
	);
};
export default UsersList;
