import React from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ImageField,
	Toolbar,
	FormWithRedirect,
	BooleanInput,
	NumberInput,
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
							resource="promotions"
						/>
					</form>
				</Card>
			)}
		/>
	);
};
export default PromotionsEdit;
