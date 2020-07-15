import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from '@material-ui/core';
import {MenuItemLink} from 'react-admin';

import offers from '../offers'; /* 
import suboffers from '../suboffers'; */
import users from '../users';
import SubMenu from './SubMenu';
import SettingsIcon from '@material-ui/icons/Settings';

const Menu = ({onMenuClick, dense, logout}) => {
	const [state, setState] = useState({
		menuOffers: false,
	});

	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	const open = useSelector((state) => state.admin.ui.sidebarOpen);
	useSelector((state) => state.theme); // force rerender on theme change
	const handleToggle = (menu) => {
		setState((state) => ({...state, [menu]: !state[menu]}));
	};

	return (
		<div>
			{' '}
			<SubMenu
				handleToggle={() => handleToggle('menuOffers')}
				isOpen={state.menuOffers}
				sidebarIsOpen={open}
				name="Ofertas"
				icon={<offers.icon />}
				dense={dense}
			>
				<MenuItemLink
					to={`/offers`}
					primaryText="Ofertas"
					leftIcon={<offers.icon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/>
				{/* <MenuItemLink
					to={`/suboffers`}
					primaryText="SubOfertas"
					leftIcon={<suboffers.icon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/> */}
			</SubMenu>
			<MenuItemLink
				to={`/users`}
				primaryText="Usuarios"
				leftIcon={<users.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			{isSmall && (
				<MenuItemLink
					to="/configuration"
					primaryText="Configuracion"
					leftIcon={<SettingsIcon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/>
			)}
			{isSmall && logout}
		</div>
	);
};

export default Menu;
