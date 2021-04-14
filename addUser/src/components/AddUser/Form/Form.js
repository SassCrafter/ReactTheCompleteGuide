import React, { useState } from "react";
import classes from "./Form.module.css";

function Form({ onAddUser }) {
	const [userInputs, setUserInputs] = useState({
		userName: "",
		userAge: "",
	});

	const inputChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserInputs((prevState) => ({ ...prevState, [name]: value }));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const newUser = {
			id: userInputs.userName + Math.random() * +userInputs.userAge,
			name: userInputs.userName,
			age: userInputs.userAge,
		};

		onAddUser(newUser);
		setUserInputs({
			userName: "",
			userAge: "",
		});
	};

	return (
		<form className={classes.Form} onSubmit={submitHandler}>
			<div className={classes.Group}>
				<label>Username</label>
				<input
					value={userInputs.userName}
					name="userName"
					onChange={inputChangeHandler}
				/>
			</div>
			<div className={classes.Group}>
				<label>Age (Years)</label>
				<input
					value={userInputs.userAge}
					name="userAge"
					onChange={inputChangeHandler}
				/>
			</div>
			<button type="submit" className={classes.Submit}>
				Add User
			</button>
		</form>
	);
}

export default Form;
