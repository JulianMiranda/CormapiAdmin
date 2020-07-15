import React from 'react';
import {List, Datagrid, TextField, NumberField, EditButton, SimpleList} from 'react-admin';
import {useMediaQuery} from '@material-ui/core';
import {CustomBoolean} from '../../common/fields/Boolean';
import {CustomDate} from '../../common/fields/Date';
import Filters from './Filter';
import {makeStyles} from '@material-ui/core';

const useDatagridStyles = makeStyles({
	total: {fontWeight: 'bold'},
});
const PromotionsList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	const classes = useDatagridStyles();
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
					<TextField label="Título" source="title" />
					<NumberField
						source="price"
						label="Precio"
						options={{
							style: 'currency',
							currency: 'USD',
						}}
						className={classes.total}
					/>
					<CustomBoolean label="Estado" source="status" />
					<CustomDate label="Editado" source="updatedAt" />
					<EditButton label="Editar" />
				</Datagrid>
			)}
		</List>
	);
};
export default PromotionsList;
