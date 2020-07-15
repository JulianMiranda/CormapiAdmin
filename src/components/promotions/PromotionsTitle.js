import React from 'react';

export const PromotionsTitle = ({record}) => {
	return <span>Promoción {record ? `"${record.title}"` : ''}</span>;
};
