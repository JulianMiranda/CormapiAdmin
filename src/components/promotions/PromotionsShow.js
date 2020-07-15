import React from 'react';
import {useShowController, ImageField, Show} from 'react-admin';
import {Typography, Grid, CardContent, Card} from '@material-ui/core';
import {PromotionsTitle} from './PromotionsTitle';
import {CustomBoolean} from '../../common/fields/Boolean';
import {useStyles} from './PromotionsStyles';

const PromotionsShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();
	if (!record) return null;
	return (
		<Show title={<PromotionsTitle />} {...props}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Typography variant="h4" gutterBottom align="left">
								Título: <i>{record.title}</i>
							</Typography>
							<Typography variant="h5" gutterBottom align="left">
								Descripción: <i>{record.description}</i>
							</Typography>
							<Grid item xs={12}>
								<Typography variant="h5" gutterBottom align="left">
									Precio: <i>{record.price}</i>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom align="center">
									<ImageField record={record} align="center" source="image.url" />
								</Typography>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<Typography variant="h5" gutterBottom align="center">
										Creado{' '}
									</Typography>
									<Typography gutterBottom align="center">
										{new Date(record.createdAt).toLocaleDateString()}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Typography variant="h5" gutterBottom align="center">
										Editado{' '}
									</Typography>
									<Typography gutterBottom align="center">
										{new Date(record.updatedAt).toLocaleDateString()}
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={12}>
								<div className={classes.Space}>&nbsp;</div>
								<Typography variant="h5" gutterBottom align="center">
									Status
								</Typography>
								<Typography variant="h6" gutterBottom align="center">
									<CustomBoolean record={record} label="Estado" source="status" />
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Show>
	);
};

export default PromotionsShow;
