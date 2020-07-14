import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	Space: {
		height: 20,
	},
	avatar: {
		marginRight: theme.spacing(1),
	},
	root: {
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
	},
	rootMob: {
		width: '100vw',
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
	},
	inline: {
		display: 'inline',
	},
}));
