import React, { useState } from "react";
import classes from "./Form.module.css";
import Button from "../../UI/Button/Button";

function Form({ onAddUser, updateError }) {
	const [userInputs, setUserInputs] = useState({
		userName: "",
		userAge: "",
	});

	const inputChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserInputs((prevState) => ({ ...prevState, [name]: value }));
	};

	const validateInputs = (userData) => {
		const nameIsValid = userData.name.trim().length > 0;
		const ageIsValid = +userData.age > 0 && userData.age.trim().length > 0;
		if (!nameIsValid && !ageIsValid) {
			updateError(true, "Fields can not be empty");
			return false;
		}
		if (!nameIsValid) {
			updateError(true, "Name field can not be empty");
			return false;
		}
		if (!ageIsValid) {
			updateError(
				true,
				"Age field can not be empty and must be greater than 0"
			);
			return false;
		}
		updateError(false, "");
		return true;
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const newUser = {
			id: userInputs.userName + Math.random() * +userInputs.userAge,
			name: userInputs.userName,
			age: userInputs.userAge,
		};

		if (validateInputs(newUser)) {
			onAddUser(newUser);
			setUserInputs({
				userName: "",
				userAge: "",
			});
		}
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
					type="number"
					value={userInputs.userAge}
					name="userAge"
					onChange={inputChangeHandler}
				/>
			</div>
			<Button type="submit">Add User</Button>
		</form>
	);
}

export default Form;
