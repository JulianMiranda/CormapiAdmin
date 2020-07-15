import React from 'react';

import {
	Create,
	TextInput,
	ImageInput,
	ImageField,
	ReferenceInput,
	SelectInput,
	Toolbar,
	FormWithRedirect,
} from 'react-admin';
import {Grid, Card, CardContent} from '@material-ui/core';

const SubOffersCreate = (props) => {
	return (
		<Create {...props} title="Crear SubOferta" component="div">
			<SubOffersForm />
		</Create>
	);
};

const SubOffersForm = (props) => {
	return (
		<FormWithRedirect
			{...props}
			render={(formProps) => (
				<Card>
					<form>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item sm={6} xs={12}>
									<TextInput label="Nombre" source="name" resource="units" required />
								</Grid>

								<Grid item sm={6} xs={12}>
									<ReferenceInput source="category" reference="offers">
										<SelectInput source="name" />
									</ReferenceInput>
								</Grid>
								<Grid item sm={6} xs={12}>
									<ImageInput
										source="image"
										resource="suboffers"
										accept="image/*"
										placeholder={<p>Drop your file here</p>}
										fullWidth
									>
										<ImageField source="url" />
									</ImageInput>
								</Grid>
							</Grid>
						</CardContent>

						<Toolbar
							record={formProps.record}
							basePath={formProps.basePath}
							undoable={true}
							invalid={formProps.invalid}
							handleSubmit={formProps.handleSubmit}
							saving={formProps.saving}
							resource="suboffers"
						/>
					</form>
				</Card>
			)}
		/>
	);
};
export default SubOffersCreate;
