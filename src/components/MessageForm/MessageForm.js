import '../../css/style.css';
import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { Button, Icon, TextField } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const MessageInput = withStyles({
	root: {
		'& input ': {
			width: "500px",
			color: "#FFFFFF",
		},
		'& input + fieldset': {
			borderColor: '#b1b1b1',
			borderWidth: 2,
		},
		'& label': {
			color: "#FFFFFF"
		},
	},
})(TextField);

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		color: "#FFFFFF"
	},
}));

export default function MessageForm(props) {
	const {
		className = "chat__form",
		label = "Напишите сообщение...",
		onSubmit
	} = props;

	const userName = useSelector(state => state.profile.name);

	const classes = useStyles();

	const [value, setValue] = useState("");

	const inputRef = useRef(null);

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(value, userName);
		setValue('');
		setTimeout(() => inputRef.current?.focus(), 200)
	}

	return (
		<form className={clsx(className, 'message-form__button')} action="#" onSubmit={handleSubmit}>
			<MessageInput
				autoFocus
				className="message-form__input"
				id="outlined-basic"
				label={label}
				onChange={handleChange}
				ref={inputRef}
				required
				type="text"
				variant="outlined"
				value={value} />
			<Button
				variant="contained"
				color="primary"
				className={clsx(classes.button, 'message-form__button')}
				endIcon={<Icon>send</Icon>}
				type="submit"
			>
				Отправить
			</Button>
		</form >
	);
}