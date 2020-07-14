import React from 'react';

export const CategoriesTitle = ({record}) => {
	return <span>Categoría: {record ? `"${record.name}"` : ''}</span>;
};
