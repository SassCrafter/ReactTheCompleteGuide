import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

function Backdrop({ onClick }) {
	return <div className={classes.backdrop} onClick={onClick}></div>;
}

function ModalOverlay({ children }) {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	);
}

function Modal({ children, onBackdropClick }) {
	return ReactDom.createPortal(
		<React.Fragment>
			<Backdrop onClick={onBackdropClick} />
			<ModalOverlay>{children}</ModalOverlay>
		</React.Fragment>,
		document.getElementById("overlay")
	);
}

export default Modal;
