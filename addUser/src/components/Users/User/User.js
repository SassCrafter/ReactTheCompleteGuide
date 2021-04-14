import React from "react";
import classes from "./User.module.css";

function User({ userName, id, userAge, onDeleteUser }) {
	const clickHandler = (id) => {
		onDeleteUser(id);
	};
	return (
		<div className={classes.User} onClick={() => clickHandler(id)}>
			<p className={classes.Text}>
				{userName} ({userAge})
			</p>
		</div>
	);
}

export default User;
