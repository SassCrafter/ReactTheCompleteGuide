import React from "react";
import classes from "./Button.module.css";

function Button({ children, className, ...restProps }) {
	return (
		<button className={`${classes.Button} ${className}`} {...restProps}>
			{children}
		</button>
	);
}

export default Button;
