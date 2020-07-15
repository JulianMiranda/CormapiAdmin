import React from 'react';

export const SubOffersTitle = ({record}) => {
	return <span>Negocio {record ? `"${record.name}"` : ''}</span>;
};
