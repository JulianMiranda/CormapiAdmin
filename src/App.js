import React from 'react';
import {Admin, Resource} from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './auth/Provider';
import {CustomLoginPage} from './auth/Login';
import {Layout} from './components/layout';

import Users from './components/users';
import Offers from './components/offers';
import Promotions from './components/promotions';

import themeReducer from './themeReducer';
import customRoutes from './routes';

/* import RolesReducer from './store/reducers/roles.reducer'; */
/* import RolesSaga from './store/sagas/roles.saga'; */

const App = (props) => {
	return (
		<Admin
			title="Cormapi Admin"
			/* customSagas={[RolesSaga]} */
			/* customReducers={{roles: RolesReducer}} */
			customRoutes={customRoutes}
			dataProvider={dataProvider}
			authProvider={authProvider}
			loginPage={CustomLoginPage}
			layout={Layout}
			customReducers={{theme: themeReducer}}
		>
			{(permissions) =>
				permissions === 'ADMIN' && [
					<Resource options={{label: 'Ofertas'}} name="offers" {...Offers} />,
					<Resource options={{label: 'Promociones'}} name="promotions" {...Promotions} />,
					<Resource options={{label: 'Usuarios'}} name="users" {...Users} />,
				]
			}
		</Admin>
	);
};

export default App;
