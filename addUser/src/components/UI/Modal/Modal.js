import React from "react";
import classes from "./Modal.module.css";
import BackDrop from "../BackDrop/Backdrop";

function Modal({ children, open, errorText, description }) {
	return (
		<>
			<BackDrop open />
			<div className={classes.Modal}>
				<div className={classes.Header}>
					<h3>{errorText}</h3>
				</div>
				<p>{description}</p>
				<button className={classes.Button}>Okay</button>
			</div>
		</>
	);
}

export default Modal;
