import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";

function Users({ items, onDeleteUser }) {
	console.log(items);
	return (
		<div className={classes.Container}>
			{items?.map((item) => (
				<User
					key={item.id}
					id={item.id}
					userName={item.name}
					userAge={item.age}
					onDeleteUser={onDeleteUser}
				/>
			))}
		</div>
	);
}

export default Users;
