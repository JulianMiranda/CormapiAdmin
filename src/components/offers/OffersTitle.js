import React from 'react';

export const OffersTitle = ({record}) => {
	return <span>Oferta: {record ? `"${record.title}"` : ''}</span>;
};
