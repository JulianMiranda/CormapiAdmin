import * as React from 'react';
import {memo} from 'react';
import {useStyles} from './UsersStyles';
import AvatarField from './AvatarField';

const FullNameField = ({record, size}) => {
	console.log(record, 'Nombre');

	const classes = useStyles();
	return record ? (
		<div className={classes.root}>
			<AvatarField className={classes.avatar} record={record} size={size} />
			{record.name} {record.last_name}
		</div>
	) : null;
};

FullNameField.defaultProps = {
	source: 'name',
	label: 'Nombre',
};

export default memo(FullNameField);
