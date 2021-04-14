import React from "react";
import classes from "./Backdrop.module.css";

function Backdrop({ open }) {
	return (
		<div className={`${classes.Backdrop} ${open && classes.Open}`}></div>
	);
}

export default Backdrop;
