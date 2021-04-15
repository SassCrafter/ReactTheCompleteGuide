import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import Button from "../Button/Button";

function Modal({ open, errorText, description, onCloseModal }) {
	return (
		<div
			className={`${classes.Wrapper} ${open && classes.Open}`}
			onClick={onCloseModal}
		>
			<div className={classes.Modal}>
				<div className={classes.Header}>
					<h3>{errorText}</h3>
				</div>
				<div className={classes.Body}>
					<p>{description}</p>
					<Button onClick={onCloseModal} className={classes.Submit}>
						Okay
					</Button>
				</div>
			</div>
		</div>
	);
}

const ErrorModal = (props) => {
	return ReactDom.createPortal(
		<Modal {...props} />,
		document.getElementById("overlay")
	);
};

export default ErrorModal;
