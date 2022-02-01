import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import GavelIcon from '@mui/icons-material/Gavel';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import * as styles from '../styles/Nav.module.css';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: 'rgba(0, 0, 0, 0.493) !important'
	}
}));


export default function Navigation() {
	const classes = useStyles();

	const [ value, setValue ] = useState(0);

	return (
		<div className={styles.container}>
			<BottomNavigation
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
				className={classes.appBar}
			>
				<BottomNavigationAction
					value="0"
					className={value == 0 ? styles.selected : styles.icon}
					label="Home"
					icon={<HomeIcon />}
				/>

				<BottomNavigationAction
					value="1"
					className={value == 1 ? styles.selected : styles.icon}
					label="Portfolio"
					icon={<GavelIcon />}
				/>

				<BottomNavigationAction
					value="2"
					className={value == 2 ? styles.selected : styles.icon}
					label="Contact"
					icon={<AddIcCallIcon />}
				/>
			</BottomNavigation>
		</div>
	);
}