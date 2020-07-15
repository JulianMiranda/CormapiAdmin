import React from 'react';
import {
	Edit,
	TextInput,
	Toolbar,
	ImageInput,
	ImageField,
	FormWithRedirect,
	BooleanInput,
	NumberInput,
} from 'react-admin';
import {Grid, CardContent, Card} from '@material-ui/core';
import {OffersTitle} from './OffersTitle';

const OffersEdit = (props) => {
	return (
		<Edit {...props} title={<OffersTitle />} component="div">
			<OffersForm />
		</Edit>
	);
};
const OffersForm = (props) => {
	return (
		<FormWithRedirect
			{...props}
			render={(formProps) => (
				<Card>
					<form>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item sm={6} xs={12}>
									<TextInput label="Título" source="title" />
								</Grid>
								<Grid item sm={6} xs={12}>
									<TextInput label="Descripción" source="description" />
								</Grid>
								<Grid container spacing={2}>
									<Grid item sm={6} xs={12}>
										<NumberInput label="Precio" source="price" />
									</Grid>
									<Grid item sm={6} xs={12}>
										<BooleanInput label="Estado" source="status" />
									</Grid>
								</Grid>
							</Grid>
							<Grid item sm={6} xs={12}>
								<ImageInput
									source="image"
									resource="promotions"
									accept="image/*"
									placeholder={<p>Drop your file here</p>}
								>
									<ImageField source="url" />
								</ImageInput>
							</Grid>
						</CardContent>
						<Toolbar
							record={formProps.record}
							basePath={formProps.basePath}
							undoable={true}
							invalid={formProps.invalid}
							handleSubmit={formProps.handleSubmit}
							saving={formProps.saving}
							resource="offers"
						/>
					</form>
				</Card>
			)}
		/>
	);
};

export default OffersEdit;
