import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';

const AvatarField = ({record, size = '25', className}) => {
	console.log(record, 'Imagen');
	return record ? (
		<Avatar
			src={`${record.image.url}`}
			style={{width: parseInt(size, 10), height: parseInt(size, 10)}}
			className={className}
		/>
	) : null;
};

export default AvatarField;
