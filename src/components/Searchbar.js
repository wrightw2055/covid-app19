import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { searchData } from '../api/api';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

export default function BasicTextFields(props) {
	const [data, setData] = useState(null);
	useEffect(() => {
		(async () => {
			const info = await searchData();
			console.log(info);
			setData(info);
		})();
	}, []);
	// const mySearch = info.map((Countri))

	const classes = useStyles();
	return (
		<form className={classes.root} noValidate autoComplete='off'>
			<TextField
				onChange={props.handleChange}
				id='standard-basic'
				label='Search Countries'
			/>
		</form>
	);
}
