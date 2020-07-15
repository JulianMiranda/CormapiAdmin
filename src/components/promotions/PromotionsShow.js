import React from 'react';
import {useShowController, ImageField, Show} from 'react-admin';
import {Typography, Grid, CardContent, Card} from '@material-ui/core';
import {PromotionsTitle} from './PromotionsTitle';
import {CustomBoolean} from '../../common/fields/Boolean';
import {useMediaQuery} from '@material-ui/core';
import {useStyles} from './PromotionsStyles';

const PromotionsShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();
	console.log(record, 'Record');
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	if (!record) return null;
	return (
		<Show title={<PromotionsTitle />} {...props}>
			{isSmall ? (
				<Card>
					<CardContent>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom align="center">
									{record.name}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom align="center">
									{record.category.name}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom align="center">
									<ImageField record={record} align="center" source="image.url" />
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom align="center">
									Creado: {new Date(record.createdAt).toLocaleDateString()}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom align="center">
									Editado: {new Date(record.updatedAt).toLocaleDateString()}
								</Typography>
							</Grid>

							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom align="center">
									Status: <CustomBoolean record={record} label="Estado" source="status" />
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			) : (
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Typography variant="h4" gutterBottom align="center">
									{record.name}
								</Typography>
								<ImageField record={record} align="center" source="image.url" />
							</Grid>
							<Grid item xs={6}>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Typography variant="h5" gutterBottom align="center">
											Creado{' '}
										</Typography>
										<Typography gutterBottom align="center">
											{new Date(record.createdAt).toLocaleDateString()}
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography variant="h5" gutterBottom align="center">
											Editado{' '}
										</Typography>
										<Typography gutterBottom align="center">
											{new Date(record.updatedAt).toLocaleDateString()}
										</Typography>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<div className={classes.Space}>&nbsp;</div>
									<Typography variant="h5" gutterBottom align="center">
										Status
									</Typography>
									<Typography variant="h6" gutterBottom align="center">
										<CustomBoolean record={record} label="Estado" source="status" />
									</Typography>
								</Grid>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<div className={classes.Space}>&nbsp;</div>
										<Typography variant="h5" gutterBottom align="center">
											Oferta: <i>{record.category.name}</i>
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			)}
		</Show>
	);
};

export default PromotionsShow;