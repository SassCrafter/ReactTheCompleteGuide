import React from "react";
import classes from "./AddUser.module.css";
import Form from "./Form/Form";
import Modal from "../UI/Modal/Modal";

function AddUser({ onAddUser }) {
	return (
		<>
			<Modal
				open
				errorText="Invalid Input"
				description="Please fill all fields"
			>
				Modal
			</Modal>
			<div className={classes.Container}>
				<Form onAddUser={onAddUser} />
			</div>
		</>
	);
}

export default AddUser;
