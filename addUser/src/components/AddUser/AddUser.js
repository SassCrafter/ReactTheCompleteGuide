import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Form from "./Form/Form";
import ErrorModal from "../UI/Modal/Modal";
import Card from "../UI/Card/Card";

function AddUser({ onAddUser }) {
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const updateError = (isInvalid, errorMessage) => {
		setError(isInvalid);
		setErrorMessage(errorMessage);
	};

	const closeModalHandler = () => {
		setError(false);
		setErrorMessage("");
	};

	return (
		<>
			<ErrorModal
				open={error}
				errorText="Invalid Input"
				description={errorMessage}
				onCloseModal={closeModalHandler}
			>
				Modal
			</ErrorModal>

			<Card className={classes.Container}>
				<Form onAddUser={onAddUser} updateError={updateError} />
			</Card>
		</>
	);
}

export default AddUser;
