import React from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ReferenceInput,
	ImageField,
	SelectInput,
	Toolbar,
	FormWithRedirect,
	BooleanInput,
} from 'react-admin';
import {PromotionsTitle} from './PromotionsTitle';
import {Grid, CardContent, Card} from '@material-ui/core';

const PromotionsEdit = (props) => {
	return (
		<Edit {...props} title={<PromotionsTitle />} component="div">
			<PromotionsForm />
		</Edit>
	);
};

const PromotionsForm = (props) => {
	return (
		<FormWithRedirect
			{...props}
			render={(formProps) => (
				<Card>
					<form>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item sm={6} xs={12}>
									<TextInput label="Nombre" source="name" />
								</Grid>{' '}
								<Grid item sm={6} xs={12}>
									<ReferenceInput label="Oferta" source="category.id" reference="offers">
										<SelectInput source="name" />
									</ReferenceInput>
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
								<Grid item sm={6} xs={12}>
									<BooleanInput label="Estado" source="status" />
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
							resource="promotions"
						/>
					</form>
				</Card>
			)}
		/>
	);
};
export default PromotionsEdit;