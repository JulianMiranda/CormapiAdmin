import React from 'react';
import {Filter, ReferenceInput, SearchInput, SelectInput} from 'react-admin';

const OffersFilter = (props) => (
	<Filter {...props}>
		<SearchInput source="q" alwaysOn />
		<ReferenceInput
			label="Oferta"
			source="category"
			reference="offers"
			sort={{field: 'id', order: 'ASC'}}
		>
			<SelectInput source="name" />
		</ReferenceInput>
	</Filter>
);
export default OffersFilter;
