import React from 'react';

export const PromotionsTitle = ({record}) => {
	return <span>Negocio {record ? `"${record.name}"` : ''}</span>;
};
